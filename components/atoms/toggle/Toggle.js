import React, { useState } from 'react'
import { css } from 'glamor'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import './toggle.scss'

const Toggle = props => {

    const {
        className = '',
        theme = '',
        nameLeft,
        nameRight,
        id,
        checked = false
    } = props

    const [check, setCheck] = useState(false)

    const toggleClass = classNames('a-toggle', className, {
        'a-toggle--on-dark': theme === 'dark'
    })

    const handleChange = e => {
        setCheck(e.target.checked)
    }

    let inlineCss = css({
        ':first-of-type': {
            'opacity': check ? '0.4' : '1'
        },
        ':last-of-type': {
            'opacity': check ? '1' : '0.4'
        },
    })

    return (
        <div className={toggleClass}>
            <label htmlFor={id} className="a-toggle__label">
                <span className="a-toggle__value" {...inlineCss}>{nameLeft}</span>
                <span className="a-toggle__slider-wrap">
                    <input type="checkbox" id={id} name={id} defaultChecked={checked} onChange={handleChange} />
                <span className="a-toggle__slider"></span>
                </span>
                <span className="a-toggle__value" {...inlineCss}>{nameRight}</span>
            </label>
        </div>
    )
}

Toggle.propTypes = {
    className: PropTypes.string,
    theme: PropTypes.string,
    id: PropTypes.string,
    nameLeft: PropTypes.string,
    nameRight: PropTypes.string,
    checked: PropTypes.bool,
    children: PropTypes.string,
}

export default Toggle
