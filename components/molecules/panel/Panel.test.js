import React from 'react'
import renderer from 'react-test-renderer'
import Panel from './Panel'
import PanelHeader from '../../atoms/panel/PanelHeader'
import Header from '../../atoms/header/Header'
import PanelBody from '../../atoms/panel/PanelBody'
import PanelFooter from '../../atoms/panel/PanelFooter'
import Button from '../../atoms/button/Button'

describe('Check the panel renders', () => {
    test('it should match the snapshot', () => {

        const tree = renderer
            .create(
                <Panel theme="dark" centerContent={true}>
                    <PanelHeader>
                        <Header headerType="h2">This is a panel title with centered content</Header>
                    </PanelHeader>
                    <PanelBody>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </PanelBody>
                    <PanelFooter>
                        <Button theme="primary">A panel button</Button>
                    </PanelFooter>
                </Panel>
            )
            .toJSON()
        expect(tree).toMatchSnapshot()

    })
})