const mockAxios = jest.genMockFromModule('axios');

export const resolvedRequest = {
  data: {},
  status: 200,
  statusText: 'OK',
  headers: {},
  config: {}
};

export const rejectedRequest = {
  response: {
    data: { errors: { message: 'errors' } },
    status: 500,
    statusText: 'ERROR',
    headers: {},
    config: {}
  }
};

export default {
  get: jest.fn(() => Promise.resolve({ ...resolvedRequest })),
  post: jest.fn(() => Promise.resolve({ ...resolvedRequest, status: 201 })),
  put: jest.fn(() => Promise.resolve({ ...resolvedRequest })),
  delete: jest.fn(() => Promise.resolve({ ...resolvedRequest })),
  patch: jest.fn(() => Promise.resolve({ ...resolvedRequest })),
  create: jest.fn(() => mockAxios)
};
