import React from 'react';
import Image from './Image';

describe('Check the image renders', () => {
	test('it should render the image', () => {

		const renderedImage = Image({
			src = 'images/hastings-direct.svg',
			height = '100',
			width = '300',
			alt = 'Hastings Direct',
			className='a-img--responsive'		// not sure about this
		});

		expect(renderedImage).toEqual(
			<img 
				src="images/hastings-direct.svg" 
				height="100" 
				width="300" 
				alt="Hastings Direct"
				className="a-img a-img--responsive">
			);
	
	});
});