import React from 'react'
import {render} from 'react-dom'
import Container from '../components/utility/layout/Container'
import Row from '../components/utility/layout/Row'
import Column from '../components/utility/layout/Column'
import Icon from '../components/atoms/icon/Icon'
import carIcon from '../src/img/icons/car.svg'
import PolicyProgress from '../components/atoms/policy progress/PolicyProgress'

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
                                <PolicyProgress progress={70} startDate="07 03 2020" endDate="08 03 2021"/>
                            </Column>
                        </Row>
                        <Row>
                            <Column xs={12}>
                                <PolicyProgress progress={111} startDate="07 03 2020" endDate="08 03 2021"/>
                            </Column>
                        </Row>
                        <Row>
                            <Column xs={12}>
                                <PolicyProgress expired={true} endDate="08 03 2021"/>
                            </Column>
                        </Row>
                        <Row>
                            <Column xs={12}>
                                <PolicyProgress cancelled={true} endDate="08 03 2021"/>
                            </Column>
                        </Row>
                        <Row>
                            <Column xs={12}>
                                <PolicyProgress willStart={true} startDate="07 03 2020"/>
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