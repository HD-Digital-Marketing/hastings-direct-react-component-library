import React from 'react'
import renderer from 'react-test-renderer'
import Identifier from './Identifier'

describe('Check the identifier renders', () => {
    test('it should match the snapshot', () => {

        const tree = renderer
            .create(
                <Identifier isReg={true} isSmall={true}>SD13 FWW</Identifier>
            )
            .toJSON()
        expect(tree).toMatchSnapshot()

    })
})