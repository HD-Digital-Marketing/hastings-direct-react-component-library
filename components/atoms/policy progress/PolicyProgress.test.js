import React from 'react';
import renderer from 'react-test-renderer';
import PolicyProgress from './PolicyProgress'

describe('Check the progress bar renders', () => {
    test('it should match the snapshot', () => {

        const tree = renderer
            .create(
                <PolicyProgress progress={70} startDate="07 03 2020" endDate="08 03 2021"/>
            )
            .toJSON()
        expect(tree).toMatchSnapshot()

    })
})