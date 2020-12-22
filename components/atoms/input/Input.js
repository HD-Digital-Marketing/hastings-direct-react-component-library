import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import './input.scss'

const Input = props => {

    const {
        type = 'text',
        name = '',
        placeholder = '',
        value = '',
        className = '',
    } = props

    const inputClass = classNames('a-input', className)

    return (
        <input
            type={type}
            name={name}
            className={inputClass}
            placeholder={placeholder}
            defaultValue={value}
        />
    )
}

Input.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    className: PropTypes.string,
}

export default Input
