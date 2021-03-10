import React from 'react';
import {render} from 'react-dom';
import Container from '../components/utility/layout/Container';
import Row from '../components/utility/layout/Row'
import Column from '../components/utility/layout/Column';
import Icon from "../components/atoms/icon/Icon";
import carIcon from "../src/img/icons/car.svg";

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
    };

    return (
        <>
            <div className="playground-container">
                <div className="playground-container__item">
                    <Container>
                        <Row>
                            <Column xs={12}>
                                <Icon svgImage={carIcon} svgWidth={15} svgHeight={15} svgFill="white" svgBackgroundColor="#0085ff" isRound={true}/>
                                <Icon svgImage={carIcon} svgWidth={20} svgHeight={20} svgFill="white" svgBackgroundColor="#0085ff" isRound={true}/>
                                <Icon svgImage={carIcon} svgWidth={25} svgHeight={25} svgFill="white" svgBackgroundColor="#0085ff" isRound={true}/>
                                <Icon svgImage={carIcon} svgWidth={30} svgHeight={30} svgFill="white" svgBackgroundColor="#0085ff" isRound={true}/>
                                <Icon svgImage={carIcon} svgWidth={15} svgHeight={15} svgFill="white" svgBackgroundColor="#0085ff" isSquare={true}/>
                                <Icon svgImage={carIcon} svgWidth={20} svgHeight={20} svgFill="white" svgBackgroundColor="#0085ff" isSquare={true}/>
                                <Icon svgImage={carIcon} svgWidth={25} svgHeight={25} svgFill="white" svgBackgroundColor="#0085ff" isSquare={true}/>
                                <Icon svgImage={carIcon} svgWidth={30} svgHeight={30} svgFill="white" svgBackgroundColor="#0085ff" isSquare={true}/>
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
);