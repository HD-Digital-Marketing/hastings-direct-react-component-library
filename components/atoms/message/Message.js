import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import './message.scss'

const Message = props => {

	const {
		className = '',
		isError = false,
		children
	} = props

	const messageClass = classNames('a-message', className, {
		'a-message--error': isError
	})

	return(
		<div className={messageClass}>{children}</div>
	)
}

Message.propTypes = {
	theme: PropTypes.string,
	className: PropTypes.string,
	isError: PropTypes.boolean,
	children: PropTypes.string
}

export default Message