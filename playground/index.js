import React from 'react'
import {render} from 'react-dom'
import Container from '../components/utility/layout/Container'
import Row from '../components/utility/layout/Row'
import Column from '../components/utility/layout/Column'
import Icon from '../components/atoms/icon/Icon'
import carIcon from '../src/img/icons/car.svg'
import Overlay from '../components/molecules/overlay/Overlay'
import Header from '../components/atoms/header/Header'

const Playground = () => {

    const divStyle = {
        backgroundColor: '#00448c',
        width: '100%',
        padding: '1em',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    }

    return (
        <>
            <div className="playground-container">
                <div className="playground-container__item">
                    <Container>
                        <Row>
                            <Column xs={12}>
                                <Overlay isOpen={true} >
                                    <Header headerType="h1">How will the car be used?</Header>
                                    <strong>Socially</strong>
                                    <p>Visiting friends and family, shopping, going out, the school run, holidays in the UK - normal personal use.</p>
                                    <strong>Socially and driving to and from a workplace</strong>
                                    <p>All the above, plus travelling to and from one work address.</p>
                                    <strong>Socially, driving to a workplace and for business use</strong>
                                    <p>This is all of the above, plus any business travel to anywhere other than a main work address. This could be driving to visit customers or to attend conferences and is applicable to you and anyone else on the policy.</p>
                                </Overlay>

                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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