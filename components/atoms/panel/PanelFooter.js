import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

const PanelFooter = props => {

    const {
        centerContent = false,
        className = '',
        children
    } = props

    const panelFooterClass = classNames('m-panel__footer', className, className, {
        'm-panel__footer--centered-content': centerContent
    })

    return(
        <div className={panelFooterClass}>{children}</div>
    )
}

PanelFooter.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node
}

export default PanelFooter
