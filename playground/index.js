import React from 'react';
import {render} from 'react-dom';
import Header from '../components/atoms/header/Header';
import Message from '../components/atoms/message/Message';

const Playground = () => {

    return (
        <>
            <div className="playground-container">
                <Message />
            </div>
        </>
    )
}

render(
    <Playground />,
    document.getElementById('root')
);