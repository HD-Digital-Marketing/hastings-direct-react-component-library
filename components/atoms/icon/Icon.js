import React from 'react'
import SVG from 'react-inlinesvg'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import './icon.scss'

const Icon = props => {

    const {
        isRound = false,
        isSquare = false,
        svgImage,
        svgWidth,
        svgHeight,
        svgFill,
        svgBackgroundColor,
        svgBorderColor,
        className = ''
    } = props

    const svgParentInlineStyle = {
        backgroundColor: svgBackgroundColor,
        borderColor: svgBorderColor,
        width: svgWidth + (isRound ? svgWidth/100*30 : svgWidth/100*15),
        height: svgHeight + (isRound ? svgHeight/100*30 : svgHeight/100*15)
    }

    const svgInlineStyle = {
        fill: svgFill
    }

    const iconClass = classNames('a-icon', className, {
        'a-icon--rounded': isRound,
        'a-icon--squared': isSquare
    })

    return(
        <span className={iconClass} style={svgParentInlineStyle}>
            <SVG src={svgImage} width={svgWidth} height={svgHeight} style={svgInlineStyle} />
        </span>
    )
}

Icon.propTypes = {
    isRound: PropTypes.bool,
    isSquare: PropTypes.bool,
    svgImage: PropTypes.string,
    svgWidth: PropTypes.number,
    svgHeight: PropTypes.number,
    svgFill: PropTypes.string,
    svgBackgroundColor: PropTypes.string,
    svgBorderColor: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.string
}

export default Icon