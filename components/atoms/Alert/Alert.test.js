import React from 'react';
import renderer from 'react-test-renderer';
import Alert from './Alert';

describe('Check the alert renders', () => {
    test('it should match the snapshot', () => {

        const tree = renderer
            .create(<Alert theme="error">This is an error message</Alert>)
            .toJSON();
        expect(tree).toMatchSnapshot();

    });
});