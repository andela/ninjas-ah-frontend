import React from 'react';
import { shallow } from '../../../../config/enzymeConfig';

import ShareArticle from '../../../components/Articles/Share/ShareArticle';

describe('<ShareArticle />', () => {
  const component = shallow(<ShareArticle />);

  it('should render without crashing', () => {
    expect(component).toMatchSnapshot();
  });
});
