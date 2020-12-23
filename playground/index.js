import React from 'react';
import { render } from 'react-dom';
import Panel from '../components/molecules/panel/Panel';

const Playground = () => {
    return (
    	<>
			<Panel hasButton hasLink>
				Feel the confidence that comes with having your home and contents insured. Choose from buildings, contents or combined insurance policies to get the right level of cover for you.
			</Panel>

			<Panel>
				Feel the confidence that comes with having your home and contents insured. Choose from buildings, contents or combined insurance policies to get the right level of cover for you.
			</Panel>
    	</>
    )
}

render(
    <Playground />,
    document.getElementById('root')
);