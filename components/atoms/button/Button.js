import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
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
        'a-btn--primary-on-dark': theme === 'primary-dark',
        'a-btn--secondary': theme === 'secondary',
        'a-btn--secondary-on-dark': theme === 'secondary-dark',
        'a-btn--tertiary': theme === 'tertiary',
        'a-btn--tertiary-on-dark': theme === 'tertiary-dark',
        'a-btn--dashed': theme === 'dashed',
        'a-btn--dashed-on-dark': theme === 'dashed-dark',
    })

    const isAnchor = url && (url.includes('http') || url.startsWith('#') || url.startsWith('mailto') || url.startsWith('/'))

    const renderAnchor = () =>
        <a href={url} className={buttonClass}>{children}</a>

    const renderButton = () =>
        <button {...{ type, onClick }} className={buttonClass}>{children}</button>

    return (
        isAnchor ? renderAnchor() : renderButton()
    )
}

Button.propTypes = {
  type: PropTypes.string,
  url: PropTypes.string,
  className: PropTypes.string,
  theme: PropTypes.string,
  children: PropTypes.string,
  onClick: PropTypes.func
}

export default Button
