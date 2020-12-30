import React from 'react';
import Image from './Image';

describe('Check the image renders', () => {
	test('it should render the image', () => {

		const renderedImage = Image({
			src = '/src/images/hastings-direct.svg',
			height = '100',
			width = '300'
			alt = 'Hastings Direct'
		});

		expect(renderedImage).toEqual(
			<img 
				src="/src/images/hastings-direct.svg" 
				className="a-image a-image--responsive" 
				height="100" 
				width="300" 
				alt="Hastings Direct">
			);
	
	});
});