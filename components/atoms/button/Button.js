import React from 'react'
import classNames from 'classnames'
import './button.scss'

const Button = props => {

    const {
        type = 'button',
        className = '',
        theme = '',
        children
    } = props

    const buttonClass = classNames('a-btn', className, {
        'a-btn--primary': theme === 'primary',
        'a-btn--secondary': theme === 'secondary',

    })

    return(
        <button className={buttonClass} type={type}>{children}</button>
    )
}

export default Button
