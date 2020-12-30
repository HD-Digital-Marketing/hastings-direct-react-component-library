import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import './image.scss'

const Image = props => {

	const {
		src = '',
		height = '',
		width = '',
		alt = '',
		className = ''
	} = props

	const imageClass = classNames('a-img', className)

	return(
		<img {...{ src, height, width, alt }} className={imageClass} />
	)
}

Image.propTypes = {
	src: PropTypes.string,
	height: PropTypes.number,
	width: PropTypes.number,
	alt: PropTypes.string,
	className: PropTypes.string
}

export default Image
