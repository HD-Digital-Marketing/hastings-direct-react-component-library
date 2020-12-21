import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import './link.scss'

const Link = props => {

	const {
		href = '',
		rel = '',
		role = '',
		target = '',
		theme = '',
		children
	} = props

	const linkClass = classNames('a-link', className, {
		'a-link--primary': theme === 'primary',
		'a-link--secondary': theme === 'secondary'
	})

	return(
		<a {...{ href, rel, role, target }} className={linkClass}>{children}</a>
	)
}

Link.propTypes = {
	href: PropTypes.string,
	rel: PropTypes.string,
	role: PropTypes.string,
	target: PropTypes.string,
	theme: PropTypes.string,
	children: PropTypes.string
}

export default Link
