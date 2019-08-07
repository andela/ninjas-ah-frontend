import { articlesType } from '../../actions-types';
import { tags as initialState } from '../../store/initialStates/tagsInitialState';

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case articlesType.CREATE_TAG_START:
      return {
        ...state,
        addTags: { ...state.addTags, message: '', loading: true, errors: {} }
      };
    case articlesType.CREATE_TAG_END:
      return {
        ...state,
        addTags: { ...state.addTags, message: '', loading: false, errors: {} }
      };
    case articlesType.CREATE_TAG_SUCESS:
      return {
        ...state,
        addTags: { loading: true, response: payload.response, errors: {} }
      };
    case articlesType.CREATE_TAG_FAILURE:
      return {
        ...state,
        addTags: {
          loading: false,
          message: '',
          errors: payload.errors
        }
      };
    default:
      return null;
  }
};
