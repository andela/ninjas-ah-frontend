import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import initialState from '../store/initialState';

export const middleware = [thunk];
export const mockStore = configureMockStore(middleware);
const store = mockStore(initialState);

export default store;
