import React from 'react';
import Table from './Table';

describe('Check the table renders', () => {
	test('it should render the table', () => {

		const tableHeaders = [
			'First name',
			'Last name',
			'Age',
			'Gender'
		]

		const tableData = [
			[
				'Jack',
				'Smith',
				'29',
				'Male'
			]
		]

		const renderedTable = Table({
			tableHeaders: tableHeaders,
			tableData: tableData,
			theme: 'primary'
		});

		expect(renderedTable).toEqual(<table className="a-table a-table--primary"><thead><tr><th>First name</th><th>Last name</th><th>Age</th><th>Gender</th></tr></thead><tbody><tr><td>Jack</td><td>Smith</td><td>29</td><td>Male</td></tr></tbody></table>);
	});
});