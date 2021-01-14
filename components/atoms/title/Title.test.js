import React from 'react';
import renderer from 'react-test-renderer';
import Title from './Title';

describe('Check the title renders', () => {
    test('it should match the snapshot', () => {

        const tree = renderer
            .create(<Title titleType="h3" theme="primary">I am a h3 title</Title>)
            .toJSON();
        expect(tree).toMatchSnapshot();

    });
});