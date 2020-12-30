import React from 'react';
import Image from './Image';

describe('Check the image renders', () => {
	test('it should render the image', () => {

		const renderedImage = Image({
			alt = 'Alternative text',
			// data-alt = '',
			// data-src = '',
			// data-srcset = '',
			height = '100',
			src = 'https://www.hastingsdirect.com/img/logos/hastings-direct.svg',
			width = '300'
		});

		expect(renderedImage).toEqual(
			<img 
				src="https://www.hastingsdirect.com/img/logos/hastings-direct.svg" 
				className="a-image a-image--responsive" 
				height="100" 
				width="300" 
				alt="Alternative text">
			);
	
	});
});