import React from 'react';
import renderer from 'react-test-renderer';
import Link from './Link';

describe('Check the link renders', () => {
	test('it should match the snapshot', () => {

		const tree = renderer
			.create(<Link href="https://google.com" rel="noopener noreferrer" role="button" target="_blank" theme="primary" >Click me I'm a link</Link>)
			.toJSON();
		expect(tree).toMatchSnapshot();

	});
});