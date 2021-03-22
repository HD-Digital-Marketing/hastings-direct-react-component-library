import React from 'react'
import SVG from 'react-inlinesvg'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import './icon.scss'

const Icon = props => {

    const {
        isRound = false,
        svgImage,
        svgWidth,
        svgHeight,
        svgFill,
        svgBackgroundColor,
        svgBorderColor,
        className = '',
        onClick
    } = props

    const svgParentInlineStyle = {
        backgroundColor: svgBackgroundColor,
        borderColor: svgBorderColor,
        borderWidth: svgWidth/100*10,
        width: svgBackgroundColor || svgBorderColor ? svgWidth + svgWidth : svgWidth,
        height: svgBackgroundColor || svgBorderColor ? svgHeight + svgHeight : svgHeight
    }

    const svgInlineStyle = {
        fill: svgFill
    }

    const iconClass = classNames('a-icon', className, {
        'a-icon--rounded': isRound
    })

    return(
        <span className={iconClass} style={svgParentInlineStyle} {...{onClick}}>
            <SVG src={svgImage} width={svgWidth} height={svgHeight} style={svgInlineStyle} />
        </span>
    )
}

Icon.propTypes = {
    isRound: PropTypes.bool,
    svgImage: PropTypes.string,
    svgWidth: PropTypes.number,
    svgHeight: PropTypes.number,
    svgFill: PropTypes.string,
    svgBackgroundColor: PropTypes.string,
    svgBorderColor: PropTypes.string,
    className: PropTypes.string
}

export default Icon
