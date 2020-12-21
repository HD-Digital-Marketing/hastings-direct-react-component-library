import React from 'react'
import classNames from 'classnames'
import './link.scss'

const Link = props => {

	const {
		children,
		href = '',
		rel = '',
		role = '',
		target = '',
		theme = ''
	} = props

	let linkClass = classNames({
		'a-link': true,
		'a-link--primary': theme === 'primary',
		'a-link--secondary': theme === 'secondary',
	})

	return(
		<a {...{ href, rel, role, target }} className={linkClass}>{children}</a>
	)
}

export default Link
