import axios from 'axios';
import * as urlHelper from './urlHelper';

const { reactUrl, defaultUrl } = urlHelper.backend;

export default ({ token, URL }) => axios.create({
  baseURL: URL || (reactUrl && `${reactUrl}/api/v1`) || (defaultUrl && `${defaultUrl}/api/v1`),
  headers: {
    'access-token': token || localStorage.token || undefined
  }
});
