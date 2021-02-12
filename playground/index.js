import React from 'react';
import {render} from 'react-dom';
import Title from '../components/atoms/title/Title';
import Button from '../components/atoms/button/Button';

import List from '../components/atoms/list/List';

const myList = ['a', 'b', 'c', 250]

const developers = ['Darren', 'Dave', 'Scott', 'Dan']

const Playground = () => {
    return (
    	<>
    		<List type='ol' theme='primary' list={myList} />
    		<List theme='secondary' list={developers} />
    	</>
    )
}

render(
    <Playground />,
    document.getElementById('root')
);