import React from 'react';
import { shallow } from 'enzyme';
import Button from '../../Button';

describe('Button', () => {
  it('renders a <button>', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.type()).toBe('button');
  });
});
