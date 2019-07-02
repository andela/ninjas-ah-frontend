import 'dotenv/config';

const { port, protocol, hostname } = window.location;
const { REACT_APP_URL_BACKEND } = process.env;
const { REACT_APP_URL_FRONTEND } = process.env;

const frontend = {
  reactUrl: REACT_APP_URL_FRONTEND,
  defaultUrl: `${protocol}//${hostname}${port ? `:${port}` : ''}`
};

const backend = {
  reactUrl: REACT_APP_URL_BACKEND,
  defaultUrl: `${protocol}//${hostname}${port ? `:${port}` : ''}`
};

export { frontend, backend };
