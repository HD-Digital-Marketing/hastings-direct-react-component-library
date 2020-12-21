import React from 'react'
import classNames from 'classnames'
import './link.scss'

const Link = (props) => {

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
		<a href={href} className={linkClass} rel={rel} role={role} target={target}>{children}</a>
	)
}

export default Link
