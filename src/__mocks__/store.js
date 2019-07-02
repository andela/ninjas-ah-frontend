import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import initialState from '../store/initialState';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore(initialState);

export default store;
