const map = {};
window.document.addEventListener = jest.fn((event, callback) => {
  map[event] = callback;
});
window.addEventListener = jest.fn((event, callback) => {
  map[event] = callback;
});
window.getSelection = jest.fn(() => ({
  toString: jest.fn(() => 'highlightedText'),
  getRangeAt: jest.fn(() => ({
    getBoundingClientRect: jest.fn(() => ({
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    }))
  }))
}));

window.document.querySelectorAll = jest.fn(() => [
  {
    removeEventListener: jest.fn((event, callback) => {
      map[event] = callback;
    }),
    addEventListener: jest.fn((event, callback) => {
      map[event] = callback;
    })
  }
]);

window.scrollTo = jest.fn(() => 1);

const event = jest.fn(e => map[e.name](e));
export const document = { event };
export default { ...document, document };
