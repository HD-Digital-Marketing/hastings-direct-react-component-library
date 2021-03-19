import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import './panel.scss'

const Panel = props => {

    const {
        theme = '',
        centerContent = false,
        className = '',
        children
    } = props

    const panelClass = classNames('m-panel', className, {
        'm-panel--dark': theme === 'dark',
        'm-panel--curve-pattern': theme === 'pattern',
        'm-panel--centered-content': centerContent
    })

    return(
        <div className={panelClass}>{children}</div>
    )
}

Panel.propTypes = {
    theme: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.node
}

export default Panel
