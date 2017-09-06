import React from 'react';
import { shallow, mount } from 'enzyme';

import Hello from '../../../src/components/Hello';

describe('The Hello component', () => {
  describe('as a React object', () => {
    test('should return a function', () => {
      const componentWithoutName = shallow(
        <Hello />,
      );
      const componentWithName = shallow(
        <Hello name="Dave" />,
      );

      [componentWithName, componentWithoutName].map(component => expect(typeof component).toBe('object'));
    });

    test('should have a string of `Dave` as the name prop', () => {
      const component = shallow(
        <Hello name="Dave" />,
      );

      expect(
        component.prop('name'),
      ).toEqual('Dave');
    });
  });

  describe('as a rendered component', () => {
    test('should return `Hello!`', () => {
      const component = mount(
        <Hello />,
      );

      expect(
        component.text(),
      ).toEqual('Hello!');
    });

    test('should return `Hello, Dave!', () => {
      const component = mount(
        <Hello name="Dave" />,

      );

      expect(
        component.text(),
      ).toEqual('Hello, Dave!');
    });
  });
});
