import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import Label from '../label/Label'
import Icon from '../icon/Icon'
import './dropdown.scss'
import chevDown from '../../../src/img/icons/chevron_down.svg'

const Dropdown = props => {

    const {
        options = [],
        name = '',
        label = '',
        theme = '',
        className = ''
    } = props

    const dropdownClass = classNames('a-dropdown', className, {
        'a-dropdown--dark': theme === 'dark'
    })

    return (
        <div className={dropdownClass}>
            {label !== '' ? <Label forLabel={name} theme={theme}>{label}</Label> : ''}
            <div className="a-dropdown__wrap">
                <Icon svgImage={chevDown} svgWidth={15} svgHeight={15} className="a-dropdown__icon"/>
                <select name={name} className="a-dropdown__select">
                    {options.map((option, index) => (
                        <option value={option} key={index}>{option}</option>
                    ))}
                </select>
            </div>
        </div>
    )
}

Dropdown.propTypes = {
    options: PropTypes.array,
    name: PropTypes.string,
    label: PropTypes.string,
    theme: PropTypes.string,
    className: PropTypes.string
}

export default Dropdown
