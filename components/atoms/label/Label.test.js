import React from 'react';
import renderer from 'react-test-renderer';
import Label from './Label';

describe('Check the label renders', () => {
    test('it should match the snapshot', () => {

        const tree = renderer
            .create(<Label forLabel="anInputId" theme="dark" >This is a label</Label>)
            .toJSON();
        expect(tree).toMatchSnapshot();

    });
});