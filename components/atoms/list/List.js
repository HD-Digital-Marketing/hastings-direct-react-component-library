import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import './list.scss'

const List = props => {

	const {
		type = '',
		className = '',
		theme = '',
		children
	} = props

	const listClass = classNames('a-list', className, {
		'a-list--primary': theme === 'primary',
		'a-list--secondary': theme === 'secondary',

	})

	const items = ['List item 1', 'List item 2', 'List item 3', 'List item 4', 'List item 5']

	const listItems = items.map((item, index) =>
		<li key={index} >{ item }</li>
	);

	const listType = type && (type.includes('ol'))

	const renderUnorderedList = () =>
		<ul className={listClass}>{listItems}</ul>

	const renderOrderedList = () =>
		<ol className={listClass}>{listItems}</ol>

	return (
		listType ? renderUnorderedList() : renderOrderedList()
	)

}

export default List
