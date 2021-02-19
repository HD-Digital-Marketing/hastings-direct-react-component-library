import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import './message.scss'

const Message = props => {

	const {
		theme = '',
		className = '',
		children
	} = props

	const messageClass = classNames('a-message', className, {
		'a-message--primary': theme === 'primary',
		'a-message--primary-on-dark': theme === 'primary-dark'
	})

	return(
		<div>Hello</div>
	)
}

Message.propTypes = {
	theme: PropTypes.string,
	className: PropTypes.string,
	children: PropTypes.string
}

export default Message