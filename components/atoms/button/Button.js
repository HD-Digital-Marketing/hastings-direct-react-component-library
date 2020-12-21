import React from 'react'
import classNames from 'classnames'
import './button.scss'

const Button = props => {

    const {
        type = 'button',
        className = '',
        theme = '',
        children,
        onClick
    } = props

    const buttonClass = classNames('a-btn', className, {
        'a-btn--primary': theme === 'primary',
        'a-btn--secondary': theme === 'secondary',

    })

    return(
        <button {...{ type, onClick }} className={buttonClass}>{children}</button>
    )
}

export default Button
