import React from 'react';
import {render} from 'react-dom';
import Button from '../components/atoms/button/Button';
import Title from '../components/atoms/title/Title';

const App = () => {
    return (
        <>
            <Title titleType="h2" theme="secondary">A h2 title</Title>
            <Button type="submit" theme="primary">Click me</Button>
        </>
    )
}

render(
    <App />,
    document.getElementById('root')
);