import React from 'react';
import {render} from 'react-dom';
import Header from '../components/atoms/header/Header';
import Message from '../components/atoms/message/Message';

const Playground = () => {

    return (
        <>
            <Message>Test of the message</Message>
        </>
    )
}

render(
    <Playground />,
    document.getElementById('root')
);