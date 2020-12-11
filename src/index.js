import React from 'react';
import {render} from 'react-dom';
import Button from "./components/atoms/Button";

const App = () => {
    return (
        <>
            <Button type="submit">Button One</Button>
            <Button>Button Two</Button>
            <Button type="link">Button Three</Button>
        </>
    )
}

render(
    <App />,
    document.getElementById('root')
);