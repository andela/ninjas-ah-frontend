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
  it('should check pagination of more than 10 articles ', () => {
    component.instance().displayButtons(45);
  });
  it('should paginate more than 10 articles ', () => {
    component.setProps({ limit: 1, offset: 10, label: 1 });
    component
      .find('.pagination button')
      .at(0)
      .simulate('click');
    component.instance().paginateArticles({ limit: 1, offset: 10, label: 1 });
  });
  it('should load other article page on click ', () => {
    component.setProps({ limit: 1, offset: 10, label: 1 });
    component
      .find('.pagination button')
      .at(0)
      .simulate('click');
    component.instance().paginateArticles({ limit: 1, offset: 10, label: 1 });
  });
  it('should load other article page on click ', () => {
    component.setProps({ limit: 1, offset: 10, label: 1 });
    component
      .find('.pagination button')
      .at(0)
      .simulate('click');
    component.instance().paginateArticles({ limit: 1, offset: 10, label: 1 });
  });
  it('should pagination ', () => {
    component.instance().displayButtons(1);
  });
});
