import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import './identifier.scss'

const Identifier = props => {

    const {
        isReg = false,
        isSmall = false,
        className = '',
        children
    } = props

    const identifierClass = classNames('a-identifier', className, {
        'a-identifier--reg': isReg,
        'a-identifier--small': isSmall,
    })

    return(
        <span className={identifierClass}>{children}</span>
    )
}

Identifier.propTypes = {
    isReg: PropTypes.bool,
    isSmall: PropTypes.bool,
    theme: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.string
}

export default Identifier
