import React from 'react'
import { css } from 'glamor'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import './input.scss'

const Input = props => {

    const {
        theme = '',
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
        wrapClass = '',
        icon
    } = props

    let inlineCss = css({
        ':before': {
            'background-image': `url(${icon ?? ''})`
        },
    })

    const inputClass = classNames('a-input', className, {
        'a-input--success': theme === 'success',
        'a-input--error': theme === 'error',
        'a-input--reg': theme === 'reg',
        'a-input--error a-input--reg': theme === 'reg-error',
        'a-input--value': theme === 'value',
        'a-input--error a-input--value': theme === 'value-error',
        'a-input--miles': theme === 'miles',
        'a-input--error a-input--miles': theme === 'miles-error',
        'a-input--icon-left': theme === 'icon-left',
        'a-input--error a-input--icon-left': theme === 'icon-left-error',
        'a-input--icon-right': theme === 'icon-right',
        'a-input--error a-input--icon-right': theme === 'icon-right-error'
    })

    const inputWrapClass = classNames('a-input__wrap', {
        'a-input__wrap--success': wrapClass === 'success',
        'a-input__wrap--error': wrapClass === 'error',
        'a-input__wrap--reg': wrapClass === 'reg',
        'a-input__wrap--reg a-input__wrap--error': wrapClass === 'reg-error',
        'a-input__wrap--value': wrapClass === 'value',
        'a-input__wrap--value a-input__wrap--error': wrapClass === 'value-error',
        'a-input__wrap--miles': wrapClass === 'miles',
        'a-input__wrap--miles a-input__wrap--error': wrapClass === 'miles-error',
        'a-input__wrap--icon a-input__wrap--icon-left': wrapClass === 'icon-left',
        'a-input__wrap--icon a-input__wrap--icon-left a-input__wrap--error': wrapClass === 'icon-left-error',
        'a-input__wrap--icon a-input__wrap--icon-right': wrapClass === 'icon-right',
        'a-input__wrap--icon a-input__wrap--icon-right a-input__wrap--error': wrapClass === 'icon-right-error'
    })

    return (
        <div className={inputWrapClass} {...inlineCss}>
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
        </div>
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
