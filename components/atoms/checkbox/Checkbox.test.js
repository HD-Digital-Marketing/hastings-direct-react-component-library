import React from 'react';
import renderer from 'react-test-renderer';
import Checkbox from './Checkbox';

describe('Check the checkbox renders', () => {
    test('it should match the snapshot', () => {

        const tree = renderer
            .create( <Checkbox id="checkboxOne" name="checkboxOne" value="Car" checked={true}>Car</Checkbox>)
            .toJSON();
        expect(tree).toMatchSnapshot();

    });
});