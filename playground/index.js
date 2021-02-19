import React from 'react';
import {render} from 'react-dom';
import Header from '../components/atoms/header/Header';
import Message from '../components/atoms/message/Message';

const Playground = () => {

    return (
        <>
            <Message isError>Sorry, we can't find that reg number. Please check and try again.</Message>
        </>
    )
}

render(
    <Playground />,
    document.getElementById('root')
);