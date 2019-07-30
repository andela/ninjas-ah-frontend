import React from 'react';
import { ProgressBar as ProgressBarComponent } from '../../../components/common/ProgressBar/ProgressBar';
import { shallow } from '../../../../config/enzymeConfig';

describe('<Progress />', () => {
  const component = shallow(<ProgressBarComponent />);
  it('should render progressbar', () => {
    expect(component).toHaveLength(1);
  });
});
