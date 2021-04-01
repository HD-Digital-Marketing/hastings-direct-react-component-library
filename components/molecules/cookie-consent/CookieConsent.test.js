import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import CookieConsent from './CookieConsent'

describe('Check the cookie consent renders', () => {

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
                <CookieConsent
                    cookiesSet={false}
                    isOpen={true}
                    experienceSet={false}
                    analyticsSet={false}
                    commsSet={false}
                />
            )
            .toJSON()
        expect(tree).toMatchSnapshot()

    })
})