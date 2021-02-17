import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import './alert.scss'

const Alert = props => {

    const {
        theme = '',
        className = '',
        children
    } = props

    let alertIcon = '';

    const alertClass = classNames('a-alert', className, {
        'a-alert--success': theme === 'success',
        'a-alert--info': theme === 'info',
        'a-alert--warning': theme === 'warning',
        'a-alert--error': theme === 'error'
    })

    switch (theme) {
        case 'success':
            alertIcon = <span className="a-alert__icon" >&checkmark;</span>
            break;
        case 'warning':
            alertIcon = <span className="a-alert__icon">&#9888;</span>
            break;
        case 'info':
            alertIcon = <span className="a-alert__icon">&#8505;</span>
            break;
        case 'error':
            alertIcon = <span className="a-alert__icon">&#10005;</span>
            break;
        default:
            alertIcon = ''
    }

    return(
        <div className={alertClass}>
            {alertIcon}{children}
        </div>
    )
}

Alert.propTypes = {
    theme: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.string
}

export default Alert
