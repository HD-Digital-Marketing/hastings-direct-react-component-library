import React from 'react';
import Link from './Link';

describe('Check the link renders', () => {
	test('it should render the link', () => {

		const renderedLink = Link({
			href: '#',
			rel: 'noopener noreferrer',
			role: 'button',
			target: '_blank',
			theme: 'primary',
			children: 'Click me'
		});

		expect(renderedLink).toEqual(<a href="#" className="a-link a-link--primary" rel="noopener noreferrer" target="_blank" role="button">Click me</a>);
	});
});