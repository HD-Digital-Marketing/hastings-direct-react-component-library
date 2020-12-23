import React from 'react';
import { render } from 'react-dom';
import Panel from '../components/molecules/panel/Panel';

const Playground = () => {
    return (
    	<Panel isTest>Hello Panel</Panel>
    )
}

render(
    <Playground />,
    document.getElementById('root')
);