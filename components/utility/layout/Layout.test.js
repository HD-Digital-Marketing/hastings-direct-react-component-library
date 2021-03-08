import React from 'react'
import renderer from 'react-test-renderer'
import Container from './Container';
import Row from './Row';
import Column from './Column';

describe('Check the grid renders', () => {
    test('it should match the snapshot', () => {

        const tree = renderer
            .create(
                <Container fluid={true}>
                    <Row>
                        <Column xs={12} sm={10} md={8} lg={6} xl={4}>
                            This is a column
                        </Column>
                    </Row>
                </Container>
            )
            .toJSON()
        expect(tree).toMatchSnapshot()

    })
})