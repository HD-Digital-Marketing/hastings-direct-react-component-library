import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import Drawer from './Drawer'

describe('Check the drawer renders', () => {

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
                <Drawer isOpen={true}>Overlay content</Drawer>
            )
            .toJSON()
        expect(tree).toMatchSnapshot()

    })
})