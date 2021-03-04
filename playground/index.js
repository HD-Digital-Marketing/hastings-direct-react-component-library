import React from 'react';
import {render} from 'react-dom';
import Toggle from '../components/atoms/toggle/Toggle';

const Playground = () => {

    return (
        <>

            <div className="playground-container">
                <div className="playground-container__item">
                    <Toggle theme="dark" nameLeft="Annually" nameRight="Monthly" id="group" />
                </div>
                <div className="playground-container__item">
                    <Toggle nameLeft="Annually" nameRight="Monthly" id="group1" />
                </div>
            </div>
        </>
    )
}

render(
    <Playground />,
    document.getElementById('root')
);