import React from 'react'
import renderer from 'react-test-renderer'
import Icon from './Icon'
import carIcon from "../../../src/img/icons/car.svg";

describe('Check the icon renders', () => {
    test('it should match the snapshot', () => {

        const tree = renderer
            .create(<Icon svgImage={carIcon} svgWidth={30} svgHeight={30} svgFill="white" svgBackgroundColor="#0085ff" isRound={true}/>)
            .toJSON()
        expect(tree).toMatchSnapshot()

    })
})