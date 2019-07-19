import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { mount } from '../../../config/enzymeConfig';
import store from '../../__mocks__/store';
import Routes from '../../components/Routes';
import Home from '../../components/Home';
import SocialMediaAuth from '../../components/SocialMediaAuth';
import Signup from '../../components/Signup';
import Profile from '../../components/Profile';
import Notification from '../../components/Profile/Settings/NotificationsComponent/Notification';
import Login from '../../components/Login';
import ForgotPassword from '../../components/ResetPassword/ForgotPassword';
import ResetPassword from '../../components/ResetPassword/ResetPassword';
import Article from '../../components/Articles/Article/Article';
import CreateArticle from '../../components/Profile/Articles/CreateArticle';
import EditArticle from '../../components/Profile/Articles/EditArticle';
import PreviewArticle from '../../components/Profile/Articles/PreviewArticle';
import PublishedArticles from '../../components/Profile/Articles/MyArticles/Published';
import SearchArticles from '../../components/SearchArticles/SearchArticles';

describe('<Routes />', () => {
  test('renders <Home /> without crashing', () => {
    const component = mount(<Provider store={store}>
        <MemoryRouter initialEntries={['/']}>
          <Routes />
        </MemoryRouter>
      </Provider>);
    expect(component.find(Home)).toHaveLength(1);
  });
  test('renders <Home /> without crashing', () => {
    const component = mount(<Provider store={store}>
        <MemoryRouter initialEntries={['/']}>
          <Routes isAuth={true} />
        </MemoryRouter>
      </Provider>);
    expect(component.find(Home)).toHaveLength(1);
  });

  test('renders <SocialMediaAuth /> without crashing', () => {
    const component = mount(<Provider store={store}>
        <MemoryRouter initialEntries={['/auth']}>
          <Routes />
        </MemoryRouter>
      </Provider>);
    expect(component.find(SocialMediaAuth)).toHaveLength(1);
  });

  test('renders <Signup /> without crashing', () => {
    const component = mount(<Provider store={store}>
        <MemoryRouter initialEntries={['/signup']}>
          <Routes isAuth={true} />
        </MemoryRouter>
      </Provider>);
    expect(component.find(Signup)).toHaveLength(1);
  });

  test('renders <Profile /> without crashing', () => {
    const component = mount(<Provider store={store}>
        <MemoryRouter initialEntries={['/profile']}>
          <Routes isAuth={true} />
        </MemoryRouter>
      </Provider>);
    expect(component.find(Profile)).toHaveLength(1);
  });

  test('renders <Profile /> without crashing', () => {
    const component = mount(<Provider store={store}>
        <MemoryRouter initialEntries={['/profile?email=email@email.com']}>
          <Routes isAuth={true} />
        </MemoryRouter>
      </Provider>);
    expect(component.find(Profile)).toHaveLength(1);
  });

  test('renders <Profile /> without crashing', () => {
    const component = mount(<Provider store={store}>
        <MemoryRouter initialEntries={['/profile?token=401']}>
          <Routes isAuth={true} />
        </MemoryRouter>
      </Provider>);
    expect(component.find(Profile)).toHaveLength(1);
  });
  test('renders <Notification/> without crashing', () => {
    const component = mount(<Provider store={store}>
        <MemoryRouter initialEntries={['/profile/settings/notifications']}>
          <Routes />
        </MemoryRouter>
      </Provider>);
    expect(component.find(Notification).length).toBe(1);
  });
  it('render Login', () => {
    const component = mount(<Provider store={store}>
        <MemoryRouter initialEntries={['/login']}>
          <Routes />
        </MemoryRouter>
      </Provider>);
    expect(component.find(Login)).toHaveLength(1);
  });
  test('renders <ForgotPassword /> without crashing', () => {
    const component = mount(<Provider store={store}>
        <MemoryRouter initialEntries={['/forgot-password']}>
          <Routes />
        </MemoryRouter>
      </Provider>);
    expect(component.find(ForgotPassword)).toHaveLength(1);
  });

  test('renders <ResetPassword /> without crashing', () => {
    const component = mount(<Provider store={store}>
        <MemoryRouter initialEntries={['/reset-password/:token']}>
          <Routes />
        </MemoryRouter>
      </Provider>);
    expect(component.find(ResetPassword)).toHaveLength(1);
  });
  test('renders <Article/> without crashing', () => {
    const component = mount(<Provider store={store}>
        <MemoryRouter initialEntries={['/articles/hello-world-23gar4']}>
          <Routes />
        </MemoryRouter>
      </Provider>);
    expect(component.find(Article).length).toBe(1);
  });

  test('renders <CreateArticle/> without crashing', () => {
    const component = mount(<Provider store={store}>
        <MemoryRouter initialEntries={['/profile/article/new']}>
          <Routes />
        </MemoryRouter>
      </Provider>);
    expect(component.find(CreateArticle).length).toBe(1);
  });

  test('renders <EditArticle/> without crashing', () => {
    const component = mount(<Provider store={store}>
        <MemoryRouter initialEntries={['/profile/article/edit/hello-world-23gar4']}>
          <Routes />
        </MemoryRouter>
      </Provider>);
    expect(component.find(EditArticle).length).toBe(1);
  });

  test('renders <PreviewArticle/> without crashing', () => {
    const component = mount(<Provider store={store}>
        <MemoryRouter initialEntries={['/profile/article/preview/hello-world-23gar4']}>
          <Routes />
        </MemoryRouter>
      </Provider>);
    expect(component.find(PreviewArticle).length).toBe(1);
  });
  test('renders <PublishedArticles/> without crashing', () => {
    const component = mount(<Provider store={store}>
        <MemoryRouter initialEntries={['/profile/articles']}>
          <Routes />
        </MemoryRouter>
      </Provider>);
    expect(component.find(PublishedArticles).length).toBe(1);
  });
  test('renders <SearchArticles/> without crashing', () => {
    const component = mount(<Provider store={store}>
        <MemoryRouter initialEntries={['/search']}>
          <Routes />
        </MemoryRouter>
      </Provider>);
    expect(component.find(SearchArticles).length).toBe(1);
  });
});
