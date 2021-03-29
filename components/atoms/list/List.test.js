import React from 'react'
import renderer from 'react-test-renderer';
import List from './List'

describe('Check the list renders', () => {
    test('it should match the snapshot', () => {

        const listItems = [
            "Car policy",
            "Home policy",
            "Bike policy",
            "Van policy",
            "Multicar policy",
            "YouDrive policy"
        ]

        const tree = renderer
            .create(<List theme="tick-secondary-dark" isBold={true} listItems={listItems} />)
            .toJSON()
        expect(tree).toMatchSnapshot()

    })
})