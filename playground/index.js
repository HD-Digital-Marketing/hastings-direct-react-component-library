import React from 'react'
import {render} from 'react-dom'
import Image from '../components/atoms/image/Image'

const Playground = () => {
    return (
        <Image src="images/hastings-direct.svg" height="100" width="300" alt="Hastings Direct" />
    )
}

render(
    <Playground />,
    document.getElementById('root')
);