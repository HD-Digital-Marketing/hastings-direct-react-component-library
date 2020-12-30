import React from 'react';
import {render} from 'react-dom';
import Image from '../components/atoms/image/Image';

const Playground = () => {
    return (
        <>
            <img src="/src/images/hastings-direct.svg" height="100" width="300" class="a-img" alt="Hastings Direct">
        </>
    )
}

render(
    <Playground />,
    document.getElementById('root')
);