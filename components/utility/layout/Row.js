import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import './grid.scss'

const Row = props => {

    const {
        className = '',
        children
    } = props

    const rowClass = classNames('g-row', className)

    return(
        <div className={rowClass}>{children}</div>
    )
}

Row.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node
}

export default Row
