import React from 'react';
import renderer from 'react-test-renderer';
import Table from './Table';

describe('Check the table renders', () => {
	test('it should match the snapshot', () => {

		const tableHeaders = ['First name', 'Last name', 'Age', 'Gender']

		const tableData = [['Jack', 'Smith', '29', 'Male'], ['Tom', 'Jones', '56', 'Male']]

		const tree = renderer
			.create(<Table tableHeaders={tableHeaders} tableData={tableData} theme="primary" />)
			.toJSON();
		expect(tree).toMatchSnapshot();

	});
});