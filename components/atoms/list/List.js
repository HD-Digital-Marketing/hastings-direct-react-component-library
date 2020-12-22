import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import './list.scss'

const List = props => {

	const {
		listType = '',
		className = '',
		theme = '',
		children
	} = props

	let list = '';

	let listClass = classNames({
		'a-list': true,
		'a-list--primary': theme === 'primary',
		'a-list--secondary': theme === 'secondary',

	});

	const items = ['List item 1', 'List item 2', 'List item 3', 'List item 4', 'List item 5']

	const listItems = items.map((item, index) =>
		<li key={index} >{ item }</li>
	);


	switch (ListType) {
		case 'ul':
			list = <ul className={listClass}>{listItems}</ul>
			break;
		case 'ol':
			list = <ol className={listClass}>{listItems}</ol>
			break;
		default:
			list = <ul className={listClass}>{listItems}</ul>
		}

	return(
		list
	)

}

export default List;
