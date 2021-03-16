import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

const PanelBody = props => {

    const {
        centerContent = false,
        className = '',
        children
    } = props

    const panelBodyClass = classNames('m-panel__body', className, className, {
        'm-panel__body--centered-content': centerContent
    })

    return(
        <div className={panelBodyClass}>{children}</div>
    )
}

PanelBody.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node
}

export default PanelBody
