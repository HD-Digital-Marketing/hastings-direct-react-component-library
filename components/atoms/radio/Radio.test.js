import React from 'react';
import renderer from 'react-test-renderer';
import Radio from './Radio';

describe('Check the radio renders', () => {
    test('it should match the snapshot', () => {

        const tree = renderer
            .create( <Radio id="checkboxOne" name="checkboxOne" checked={true}>Some value to choose</Radio>)
            .toJSON();
        expect(tree).toMatchSnapshot();

    });
});