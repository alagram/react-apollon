import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from '../../Button';

configure({ adapter: new Adapter() });

describe('Button', () => {
  it('renders a <button>', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.type()).toBe('button');
  });
});
