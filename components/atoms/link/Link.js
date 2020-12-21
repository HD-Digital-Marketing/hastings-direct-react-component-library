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

	const linkClass = classNames('a-link', className, {
		'a-link--primary': theme === 'primary',
		'a-link--secondary': theme === 'secondary',
	})

	return(
		<a {...{ href, rel, role, target }} className={linkClass}>{children}</a>
	)
}

export default Link
