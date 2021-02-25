import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import './radio.scss'

const Radio = props => {

    const {
        className = '',
        theme = '',
        name,
        id,
        value,
        checked = false,
        disabled = false,
        readOnly = false,
        children
    } = props

    const radioClass = classNames('a-radio', className, {
        'a-radio--on-dark': theme === 'dark'
    })

    return (
        <div className={radioClass}>
            <input type="radio" {...{id, name, value, disabled, readOnly}} defaultChecked={checked} />
            <label htmlFor={name}>
                {children}
            </label>
        </div>
    )
}

Radio.propTypes = {
    type: PropTypes.string,
    className: PropTypes.string,
    theme: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.string,
    value: PropTypes.string,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool,
    children: PropTypes.string,
}

export default Radio
