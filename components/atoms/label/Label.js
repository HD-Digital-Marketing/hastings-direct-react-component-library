import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import './label.scss'

const Label = props => {

    const {
        forLabel,
        theme = '',
        className = '',
        children
    } = props

    const labelClass = classNames('a-label', className, {
        'a-label--on-dark': theme === 'dark'
    })

    return(
        <label htmlFor={forLabel} className={labelClass}>{children}</label>
    )
}

Label.propTypes = {
    forLabel: PropTypes.string,
    theme: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.string
}

export default Label
