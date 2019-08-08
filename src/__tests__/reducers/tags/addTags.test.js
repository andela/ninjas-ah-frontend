import addTagsReducer from '../../../reducers/tags/addTagReducer';
import initialState from '../../../store/initialStates/tagsInitialState';
import { articlesType } from '../../../actions-types';

describe('Reading Stats', () => {
  test('CREATE TAG START', () => {
    addTagsReducer(initialState, {
      type: articlesType.CREATE_TAG_START,
      payload: {}
    });
  });

  test('CREATE TAGS SUCCESS', () => {
    addTagsReducer(initialState, {
      type: articlesType.CREATE_TAG_SUCESS,
      payload: { addTags: { response: 'tags updated' } }
    });
  });

  test('CREATE TAGS FAILURE', () => {
    addTagsReducer(initialState, {
      type: articlesType.CREATE_TAG_FAILURE,
      payload: { addTags: { errors: '-----' } }
    });
  });

  test('CREATE TAG END', () => {
    addTagsReducer(initialState, {
      type: articlesType.CREATE_TAG_END,
      payload: { loading: false }
    });
  });
});
