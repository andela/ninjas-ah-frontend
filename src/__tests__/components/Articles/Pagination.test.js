import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { mockStore, initialState } from '../../../__mocks__/store';
import {
  Pagination as PaginationComponent,
  mapStateToProps
} from '../../../components/Articles/Pagination/Pagination';
import { shallow, mount } from '../../../../config/enzymeConfig';

describe('<Pagination />', () => {
  const state = {
    buttons: ['button'],
    pageNumber: 1,
    getAllArticles: jest.fn(),
    displayButtons: jest.fn(),
    paginateArticles: jest.fn()
  };
  const component = shallow(<PaginationComponent {...state} />);
  it('should create <PaginationComponent /> snapshot ', () => {
    expect(component).toMatchSnapshot();
  });
  it('should trigger submit button ', () => {
    component.instance().displayButtons(40);
  });
  it('should trigger close message ', () => {
    component.setProps({ limit: 1, offset: 10, label: 1 });
    component
      .find('.pagination button')
      .at(0)
      .simulate('click');
    component.instance().paginateArticles({ limit: 1, offset: 10, label: 1 });
  });
});
