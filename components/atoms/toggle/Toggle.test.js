import React from 'react'
import renderer from 'react-test-renderer'
import Toggle from './Toggle'

describe('Check the toggle renders', () => {
    test('it should match the snapshot', () => {

        const tree = renderer
            .create(<Toggle theme="dark" nameLeft="Annually" nameRight="Monthly" id="group" />)
            .toJSON()
        expect(tree).toMatchSnapshot()

    })
})