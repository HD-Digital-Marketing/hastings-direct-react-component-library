import React from 'react';
import renderer from 'react-test-renderer';
import Button from './Button';

describe('Check the button renders', () => {
    test('it should match the snapshot', () => {

        const tree = renderer
            .create(<Button type="button" theme="primary">Click me I'm a button</Button>)
            .toJSON();
        expect(tree).toMatchSnapshot();

    });
});