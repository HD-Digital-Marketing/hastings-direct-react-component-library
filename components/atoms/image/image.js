import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import './image.scss'
import Logo from './src/images/hastings-direct.svg'

const Image = props => {

	const {
		alt = '',
		className = '',
		// data-alt = '',
		// data-src = '',
		// data-srcset = '',
		height = '',
		src = '',
		width = ''
	} = props

	const imageClass = classNames('a-img', className)

	return(
		<img {...{ src, height, width, alt }} className={imageClass}>
	)
}

Image.propTypes = {
	alt: PropTypes.string,
	className: PropTypes.string,
	// data-alt: PropTypes.string,
	// data-src: PropTypes.string,
	// data-srcset: PropTypes.string,
	height: PropTypes.string,
	src: PropTypes.string,
	width: PropTypes.string,
}

export default Image
