import React from 'react'
import {render} from 'react-dom'
import Container from '../components/utility/layout/Container'
import Row from '../components/utility/layout/Row'
import Column from '../components/utility/layout/Column'
import Panel from '../components/molecules/panel/Panel'
import PanelHeader from '../components/atoms/panel/PanelHeader'
import Header from '../components/atoms/header/Header'
import PanelBody from '../components/atoms/panel/PanelBody'
import PanelFooter from '../components/atoms/panel/PanelFooter'
import Toggle from '../components/atoms/toggle/Toggle'
import Button from '../components/atoms/button/Button'

const Playground = () => {

    return (
        <>
            <div className="playground-container">
                <div className="playground-container__item">
                    <Container>
                        <Row>
                            <Column xs={12} md={6} lg={4}>
                                <Panel>
                                    <PanelHeader>
                                        <Header headerType="h2">This is a panel title</Header>
                                    </PanelHeader>
                                    <PanelBody>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    </PanelBody>
                                    <PanelFooter centerContent={true}>
                                        <Toggle nameLeft="stuff" nameRight="stufffff" />
                                    </PanelFooter>
                                </Panel>
                            </Column>
                            <Column xs={12} md={6} lg={4}>
                                <Panel theme="dark" centerContent={true}>
                                    <PanelHeader>
                                        <Header headerType="h2">This is a panel title with centered content</Header>
                                    </PanelHeader>
                                    <PanelBody>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    </PanelBody>
                                    <PanelFooter>
                                        <Button theme="primary">A panel button</Button>
                                    </PanelFooter>
                                </Panel>
                            </Column>
                            <Column xs={12} md={6} lg={4}>
                                <Panel theme="pattern" centerContent={true}>
                                    <PanelHeader>
                                        <Header headerType="h2">This is a panel title with centered content</Header>
                                    </PanelHeader>
                                    <PanelBody>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    </PanelBody>
                                    <PanelFooter>
                                        <Button theme="primary">A panel button</Button>
                                    </PanelFooter>
                                </Panel>
                            </Column>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    )
}

render(
    <Playground />,
    document.getElementById('root')
)