import React from 'react';
import {render} from 'react-dom';
import Container from '../components/utility/layout/Container';
import Row from '../components/utility/layout/Row'
import Column from '../components/utility/layout/Column';

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
                    <Container fluid={true}>
                        <h1>Container fluid</h1>
                        <Row>
                            <Column xs={8} md={6} xl={4} offset={{xs: 0, md: 3, xl: 4}}>
                                <div style={divStyle}>Column</div>
                            </Column>
                        </Row>
                    </Container>
                    <Container>
                        <h1>Container boxed</h1>
                        <Row>
                            <Column xs={12} md={6} xl={4} offset={{md: 3, xl: 4}}>
                                <div style={divStyle}>Column</div>
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