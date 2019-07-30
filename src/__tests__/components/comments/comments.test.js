import React from 'react';
import { Comments as CommentsComponent } from '../../../components/Articles/Comments/Comments';
import { shallow } from '../../../../config/enzymeConfig';

let component = '';

const state = { title: 'comments' };

describe('COMMENTS', () => {
  test('render the comments', () => {
    component = shallow(<CommentsComponent state={state} />);
    component.setState(state);
  });
});
