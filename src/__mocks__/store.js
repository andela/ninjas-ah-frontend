import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import initialState from '../store/initialState';
import apiMiddleware from '../middlewares/apiMiddleware';

export { initialState };
export const middlewares = [thunk, apiMiddleware];
export const mockStore = configureMockStore(middlewares);

export default mockStore({ ...initialState, user: { ...initialState.user, isAuth: true } });
