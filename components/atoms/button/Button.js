import React from 'react'
import classNames from 'classnames'
import './button.scss'

const Button = props => {

    const {
        type = 'button',
        url = '',
        className = '',
        theme = '',
        children,
        onClick
    } = props

    const buttonClass = classNames('a-btn', className, {
        'a-btn--primary': theme === 'primary',
        'a-btn--secondary': theme === 'secondary',

    })

    const isAnchor = url && (url.includes('http') || url.startsWith('#') || url.startsWith('mailto') || url.startsWith('/'))

    const renderAnchor = () => {
        <a href={url} className={buttonClass}>{children}</a>
    }

    const renderButton = () => {
        <button {...{ type, onClick }} className={buttonClass}>{children}</button>
    }

    return (
        isAnchor ? renderAnchor() : renderButton()
    )
}

export default Button
