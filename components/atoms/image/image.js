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



export default Image
