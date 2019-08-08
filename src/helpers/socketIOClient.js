import socketIOClient from 'socket.io-client';
import * as urlHelper from './urlHelper';

const { reactUrl, defaultUrl } = urlHelper.backend;

export default socketIOClient(reactUrl || defaultUrl, { autoConnect: true });
