const map = {};
window.document.addEventListener = jest.fn((event, callback) => {
  map[event] = callback;
});

const document = { event: jest.fn(e => map[e.name](e)) };

export default { document };
