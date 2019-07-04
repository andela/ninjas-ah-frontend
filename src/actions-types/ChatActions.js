export const INITIALIZE_MESSAGE = 'INITIALIZE_MESSAGE';
export const POST_MESSAGE = 'POST_MESSAGE';
export const GET_MESSAGES = 'GET_MESSAGES';
export const DELETE_MESSAGE = 'DELETE_MESSAGE';

export const initializeMessage = message => ({
  type: INITIALIZE_MESSAGE,
  message
});

export const postMessage = message => ({
  type: POST_MESSAGE,
  message
});

export const getMessages = messages => ({
  type: GET_MESSAGES,
  messages
});

export const deleteMessage = message => ({
  type: DELETE_MESSAGE,
  message
});
