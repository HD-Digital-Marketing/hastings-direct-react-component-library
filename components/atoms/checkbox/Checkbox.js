import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import './checkbox.scss'

const Checkbox = props => {

    const {
        className = '',
        theme = '',
        name,
        value,
        checked = false,
        disabled = false,
        readOnly = false,
        children
    } = props

    const checkboxClass = classNames('a-checkbox', className, {
        'a-checkbox--on-dark': theme === 'dark',
        'a-checkbox--secondary': theme === 'secondary',
    })

    return (
        <div className={checkboxClass}>
            <input type="checkbox" id={name} name={name} value={value} defaultChecked={checked} disabled={disabled} readOnly={readOnly}/>
            <label>
                {children}
            </label>
        </div>
    )
}

Checkbox.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  theme: PropTypes.string,
  children: PropTypes.string,
}

export default Checkbox
