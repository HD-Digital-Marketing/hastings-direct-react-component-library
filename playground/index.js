import React from 'react';
import {render} from 'react-dom';
import Title from '../components/atoms/title/Title';
import Button from '../components/atoms/button/Button';

import List from '../components/atoms/list/List';

const Playground = () => {
    return (
    	<List type='ol' />
    )
}

render(
    <Playground />,
    document.getElementById('root')
);