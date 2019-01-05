import React from 'react';
import { shallow } from 'enzyme';
import Button from '../../Button';

describe('Button', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Button />);
  });

  it('renders a <button>', () => {
    expect(wrapper.type()).toBe('button');
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
