import React from 'react'
import renderer from 'react-test-renderer'
import Dropdown from './Dropdown'

describe('Check the dropdown renders', () => {
    test('it should match the snapshot', () => {

        const options = [
            'Car policy',
            'Van policy',
            'Bike policy',
            'Home policy',
            'Multicar policy',
            'YouDrive policy'
        ]

        const tree = renderer
            .create(
                <Dropdown theme="dark" options={options} name="choosePolicy" label="Please choose your policy" />
            )
            .toJSON()
        expect(tree).toMatchSnapshot()

    })
})