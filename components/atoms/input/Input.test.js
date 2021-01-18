import React from 'react'
import renderer from 'react-test-renderer';
import Input from './Input'

describe('Check the input renders', () => {
    test('it should match the snapshot', () => {

        const tree = renderer
            .create(<Input id="someId" value="123456789" name="someName" placeholder="This is placeholder text" />)
            .toJSON();
        expect(tree).toMatchSnapshot();

    });
});