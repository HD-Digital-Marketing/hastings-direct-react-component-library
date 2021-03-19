import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

const PanelHeader = props => {

    const {
        centerContent = false,
        className = '',
        children
    } = props

    const panelHeaderClass = classNames('m-panel__header', className, {
        'm-panel__header--centered-content': centerContent
    })

    return(
        <div className={panelHeaderClass}>{children}</div>
    )
}

PanelHeader.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node
}

export default PanelHeader
