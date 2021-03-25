import React from 'react'
import renderer from 'react-test-renderer'
import Header from './Header'

describe('Check the title renders', () => {
    test('it should match the snapshot', () => {

        const tree = renderer
            .create(<Header headerType="h3" theme="primary">I am a h3 title</Header>)
            .toJSON()
        expect(tree).toMatchSnapshot()

    })
})