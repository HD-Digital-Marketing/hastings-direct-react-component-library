import React from 'react'
import {render} from 'react-dom'
import Container from '../components/utility/layout/Container'
import Row from '../components/utility/layout/Row'
import Column from '../components/utility/layout/Column'
import List from '../components/atoms/list/List'

const Playground = () => {

    const listItems = [
        "Car policy",
        "Home policy",
        "Bike policy",
        "Van policy",
        "Multicar policy",
        "YouDrive policy"
    ]

    return (
        <>
            <div className="playground-container">
                <div className="playground-container__item">
                    <Container>
                        <Row>
                            <Column xs={12}>
                                <List theme="primary-dark" listItems={listItems} />
                                <br/>
                                <br/>
                                <List theme="secondary-dark" listItems={listItems} />
                                <br/>
                                <br/>
                                <List theme="dark" listType="ol" isBold={true} listItems={listItems} />
                                <br/>
                                <br/>
                                <List theme="tick-primary-dark" listItems={listItems} />
                                <br/>
                                <br/>
                                <List theme="tick-secondary-dark" isBold={true} listItems={listItems} />
                            </Column>
                        </Row>
                    </Container>
                </div>
                <div className="playground-container__item">
                    <Container>
                        <Row>
                            <Column xs={12}>
                                <List theme="primary" isBold={true} listItems={listItems} />
                                <br/>
                                <br/>
                                <List theme="secondary" listItems={listItems} />
                                <br/>
                                <br/>
                                <List listType="ol" listItems={listItems} />
                                <br/>
                                <br/>
                                <List theme="tick-primary" isBold={true} listItems={listItems} />
                                <br/>
                                <br/>
                                <List theme="tick-secondary" isBold={true} listItems={listItems} />
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