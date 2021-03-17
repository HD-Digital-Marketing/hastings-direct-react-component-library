import React from 'react'
import {render} from 'react-dom'
import Container from '../components/utility/layout/Container'
import Row from '../components/utility/layout/Row'
import Column from '../components/utility/layout/Column'
import Icon from '../components/atoms/icon/Icon'
import carIcon from '../src/img/icons/car.svg'
import Dropdown from '../components/atoms/dropdown/Dropdown'

const Playground = () => {

    const options = [
        'Car policy',
        'Van policy',
        'Bike policy',
        'Home policy',
        'Multicar policy',
        'YouDrive policy',
    ]

    return (
        <>
            <div className="playground-container">
                <div className="playground-container__item">
                    <Container>
                        <Row>
                            <Column xs={12}>
                                <Dropdown theme="dark" options={options} name="choosePolicy" label="Please choose your policy" />
                            </Column>
                        </Row>
                    </Container>
                </div>
                <div className="playground-container__item">
                    <Container>
                        <Row>
                            <Column xs={12}>
                                <Dropdown options={options} name="choosePolicy" label="Please choose your policy" />
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