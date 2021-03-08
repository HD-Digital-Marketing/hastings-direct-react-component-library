import React from 'react'
import PropTypes from 'prop-types'
import './grid.scss'
import classNames from "classnames";

const Column = props => {

    const {
        className = '',
        xs,
        sm,
        md,
        lg,
        xl,
        offset,
        children
    } = props

    const colClass = classNames(className, {
        [`g-col-xs-${xs}`]: xs,
        [`g-col-sm-${sm}`]: sm,
        [`g-col-md-${md}`]: md,
        [`g-col-lg-${lg}`]: lg,
        [`g-col-xl-${xl}`]: xl
    })

    let offsetClass = '';

    if (offset) {
        offsetClass = classNames({
            [`g-col-xs-offset-${offset.xs}`]: offset.xs > -1,
            [`g-col-sm-offset-${offset.sm}`]: offset.sm > -1,
            [`g-col-md-offset-${offset.md}`]: offset.md > -1,
            [`g-col-lg-offset-${offset.lg}`]: offset.lg > -1,
            [`g-col-xl-offset-${offset.xl}`]: offset.xl > -1
        })
    }

    return(
        <div className={`${colClass} ${offsetClass}`}>{children}</div>
    )
}

Column.propTypes = {
    className: PropTypes.string,
    xs: PropTypes.number,
    sm: PropTypes.number,
    md: PropTypes.number,
    lg: PropTypes.number,
    xl: PropTypes.number,
    offset: PropTypes.object,
    children: PropTypes.node
}

export default Column
