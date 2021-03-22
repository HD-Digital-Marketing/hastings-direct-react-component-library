import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import Overlay from './Overlay'

describe('Check the overlay renders', () => {

    beforeAll(() => {
        ReactDOM.createPortal = jest.fn((element, node) => {
            return element
        })
    })

    afterEach(() => {
        ReactDOM.createPortal.mockClear()
    })

    test('it should match the snapshot', () => {

        const tree = renderer
            .create(
                <Overlay isOpen={true}>Overlay content</Overlay>
            )
            .toJSON()
        expect(tree).toMatchSnapshot()

    })
})