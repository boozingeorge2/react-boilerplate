import * as React from 'react';
import { shallow } from 'enzyme';
import App from './app';

describe('App', () => {
    test('mount App', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('div')).toHaveLength(1);
    });
});
