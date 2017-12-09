import React from 'react';
import { shallow, mount } from 'enzyme';

import Title from '../../../src/components/Title';

describe('The Title component', () => {
  describe('as a React object', () => {
    test('should return a function', () => {
      const component = shallow(
        <Title content="I am a heading" />,
      );

      expect(typeof component).toBe('object');
    });

    test('should have a string of `I am a heading` as the content prop', () => {
      const component = shallow(
        <Title content="I am a heading" />,
      );

      expect(
        component.prop('content'),
      ).toEqual('I am a heading');
    });
  });

  describe('as a rendered component', () => {
    test('should return `I\'m a fickin\' header!`', () => {
      const component = mount(
        <Title content="I'm a frickin' header!" />,
      );

      expect(
        component.text(),
      ).toEqual("I'm a frickin' header!");
    });

    test('should return `The Rick and Morty Show', () => {
      const component = mount(
        <Title content="The Rick and Morty Show" />,
      );

      expect(
        component.text(),
      ).toEqual('The Rick and Morty Show');
    });
  });
});
