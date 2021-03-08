import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import './grid.scss'

const Container = props => {

    const {
        fluid = false,
        className = '',
        children
    } = props

    const containerClass = classNames('g-container', className, {
        'g-container--fluid': fluid
    })

    return(
        <div className={containerClass}>{children}</div>
    )
}

Container.propTypes = {
    fluid: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.node
}

export default Container
