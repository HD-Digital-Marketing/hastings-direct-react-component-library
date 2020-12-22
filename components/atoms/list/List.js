import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import './list.scss'

const List = props => {

	const {
		type = 'ul',
		list,
		className = '',
		theme = '',
		children
	} = props

	const listClass = classNames('a-list', className, {
		'a-list--primary': theme === 'primary',
		'a-list--secondary': theme === 'secondary'
	})

	const listItems = list.map((item, index) =>
		<li key={index}>{ item }</li>
	)

	const listType = type && (type.includes('ol'))

	const renderUnorderedList = () =>
		<ul className={listClass}>{listItems}</ul>

	const renderOrderedList = () =>
		<ol className={listClass}>{listItems}</ol>

	return (
		listType ? renderOrderedList() : renderUnorderedList()
	)
}

export default List
