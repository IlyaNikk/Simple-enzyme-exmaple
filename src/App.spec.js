import React from 'react';
import {mount} from 'enzyme';
import App from './App';

describe('App tests', () => {
    describe('basic elements', () => {
        it('basic elements test', () => {
            const wrapper = mount(<App/>);

            expect(wrapper.exists('[data-marker="input-block/input"]')).toBe(true);
            expect(wrapper.exists('[data-marker="input-block/submit"]')).toBe(true);
            expect(wrapper.exists('[data-marker="output-block/text"]')).toBe(false);
        })
    });

    describe('enter text', () => {
        let wrapper;

        beforeEach(() => {
           wrapper = mount(<App />);
        });

        afterEach(() => {
            wrapper.unmount();
        })

        it('insert text', () => {
            wrapper.find('[data-marker="input-block/input"]').instance().value = 'Hello';
            wrapper.find('[data-marker="input-block/submit"]').simulate('submit');

            expect(wrapper.find('[data-marker="output-block/text"]').length).toBe(1);
            expect(wrapper.find('[data-marker="output-block/text"]').at(0).text()).toBe('Hello');
        });

        it('insert empty text', () => {
            wrapper.find('[data-marker="input-block/input"]').instance().value = '';
            wrapper.find('[data-marker="input-block/submit"]').simulate('submit');

            expect(wrapper.find('[data-marker="output-block/text"]').length).toBe(0);
        });
    });
});
