import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import './input.scss'

const Input = props => {

    const {
        type = 'text',
        id = '',
        size = '',
        length = '',
        maxLength = '',
        readOnly = false,
        disabled = false,
        min = '',
        max = '',
        multiple = false,
        required = false,
        step = '',
        autoFocus = false,
        autoComplete = 'on',
        name = '',
        placeholder = '',
        value = '',
        className = '',
    } = props

    const inputClass = classNames('a-input', className)

    return (
        <input {...{
            id,
            size,
            length,
            maxLength,
            readOnly,
            disabled,
            min,
            max,
            multiple,
            required,
            step,
            autoFocus,
            autoComplete,
            type,
            name,
            placeholder }}
               className={inputClass}
               defaultValue={value} />
    )
}

Input.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.string,
    size: PropTypes.string,
    length: PropTypes.string,
    maxLength: PropTypes.string,
    readOnly: PropTypes.bool,
    disabled: PropTypes.bool,
    min: PropTypes.string,
    max: PropTypes.string,
    multiple: PropTypes.bool,
    required: PropTypes.bool,
    step: PropTypes.string,
    autoFocus: PropTypes.bool,
    autoComplete: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    className: PropTypes.string,
}

export default Input
