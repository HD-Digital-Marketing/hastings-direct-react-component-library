import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import './panel.scss'

const Panel = props => {

    const {
        theme = '',
        centerContent = false,
        panelPadding = true,
        className = '',
        children
    } = props

    const panelClass = classNames('m-panel', className, {
        'm-panel--dark': theme === 'dark',
        'm-panel--curve-pattern': theme === 'pattern',
        'm-panel--centered-content': centerContent,
        'm-panel--no-padding': !panelPadding
    })

    return(
        <div className={panelClass}>{children}</div>
    )
}

Panel.propTypes = {
    theme: PropTypes.string,
    centerContent: PropTypes.bool,
    panelPadding: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.node
}

export default Panel
