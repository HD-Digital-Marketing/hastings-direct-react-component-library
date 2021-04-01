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
        showState = false,
        singleChoice = false,
        id,
        onChange,
        checked = false
    } = props

    const toggleClass = classNames('a-toggle', className, {
        'a-toggle--on-dark': theme === 'dark'
    })



    let inlineCss = css({
        ':first-of-type': {
            'opacity': checked ? '0.4' : '1'
        },
        ':last-of-type': {
            'opacity': checked ? '1' : '0.4'
        },
    })

    let wrapCss = {
        backgroundColor: checked ? '#0069cc' : '#afbdd1'
    }

    return (
        <div className={toggleClass}>
            <label htmlFor={id} className="a-toggle__label">
                {nameLeft ? <span className="a-toggle__value" {...inlineCss}>{nameLeft}{showState ? (checked ? ' disabled' : ' enabled') : null}</span> : null}
                <span className="a-toggle__slider-wrap" style={singleChoice ? wrapCss : null}>
                    <input type="checkbox" id={id} name={id} defaultChecked={checked} {...{onChange}} />
                <span className="a-toggle__slider"></span>
                </span>
                {nameRight ? <span className="a-toggle__value" {...inlineCss}>{nameRight}{showState ? (!checked ? ' disabled' : ' enabled') : null}</span> : null}
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
    checked: PropTypes.bool
}

export default Toggle
