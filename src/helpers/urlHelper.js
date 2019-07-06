import 'dotenv/config';

const { location } = window;
const protocol = location.protocol && location.protocol;
const hostname = location.hostname && location.hostname;
const port = (location.port && `:${location.port}`) || '';

const { REACT_APP_URL_BACKEND } = process.env;
const { REACT_APP_URL_FRONTEND } = process.env;

const frontend = {
  reactUrl: REACT_APP_URL_FRONTEND,
  defaultUrl: `${protocol}//${hostname}${port}`
};

const backend = {
  reactUrl: REACT_APP_URL_BACKEND,
  defaultUrl: `${protocol}//${hostname}${port}`
};

export { frontend, backend };
