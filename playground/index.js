import React from 'react'
import {render} from 'react-dom'
import Container from '../components/utility/layout/Container'
import Row from '../components/utility/layout/Row'
import Column from '../components/utility/layout/Column'
import Icon from '../components/atoms/icon/Icon'
import carIcon from '../src/img/icons/car.svg'
import Chat from '../components/atoms/chat/Chat'

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
                                <Chat>Chat</Chat>
                            </Column>
                        </Row>
                        <Row>
                            <Column xs={12}>
                                <Chat isSmall={true}>Chat</Chat>
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