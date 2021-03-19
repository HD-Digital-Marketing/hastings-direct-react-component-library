import React from 'react'
import renderer from 'react-test-renderer'
import Chat from './Chat'

describe('Check the chat renders', () => {
    test('it should match the snapshot', () => {

        const tree = renderer
            .create(
                <Chat isSmall={true}>Chat</Chat>
            )
            .toJSON()
        expect(tree).toMatchSnapshot()

    })
})