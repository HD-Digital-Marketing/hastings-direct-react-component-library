import React from 'react';
import {render} from 'react-dom';

const App = () => {
    return (
        <>
            <h1>Hastings Direct React component library!</h1>
            <p>Let's go...</p>
        </>
    )
}

render(
    <App />,
    document.getElementById('root')
);