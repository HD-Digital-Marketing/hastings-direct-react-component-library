import React from 'react';
import {render} from 'react-dom';
import Title from '../components/atoms/title/Title';
import Button from '../components/atoms/button/Button';

const Playground = () => {
    return (
        <>
            <Title titleType="h2" theme="secondary">A h2 title</Title>
            <Button type="submit" theme="primary">Click me</Button>
        </>
    )
}

render(
    <Playground />,
    document.getElementById('root')
);