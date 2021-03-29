import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import './list.scss'

const List = props => {

    const {
        listItems = [],
        listType = 'ul',
        isBold = false,
        theme = '',
        className = ''
    } = props

    const listClass = classNames('a-list', className, {
        'a-list--numbered': listType === 'ol',
        'a-list--dark': theme === 'dark',
        'a-list--primary': theme === 'primary',
        'a-list--primary a-list--primary-on-dark': theme === 'primary-dark',
        'a-list--secondary': theme === 'secondary',
        'a-list--secondary a-list--secondary-on-dark': theme === 'secondary-dark',
        'a-list--tick a-list--tick-primary': theme === 'tick-primary',
        'a-list--tick a-list--tick-primary a-list--tick-primary-on-dark': theme === 'tick-primary-dark',
        'a-list--tick a-list--tick-secondary': theme === 'tick-secondary',
        'a-list--tick a-list--tick-secondary a-list--tick-secondary-on-dark': theme === 'tick-secondary-dark',
        'a-list--bold': isBold
    })

    const renderUnorderedList = data => {
        return (
            <ul className={listClass}>
                {data.map((value, index) =>
                    <li key={index}>{value}</li>
                )}
            </ul>
        )
    }

    const renderOrderedList = data => {
        return (
            <ol className={listClass}>
                {data.map((value, index) =>
                    <li key={index}>{value}</li>
                )}
            </ol>
        )
    }

    return(
        listType === 'ol' ? renderOrderedList(listItems) : renderUnorderedList(listItems)
    )
}

List.propTypes = {
    listItems: PropTypes.array,
    listType: PropTypes.string,
    isBold: PropTypes.bool,
    theme: PropTypes.string,
    className: PropTypes.string
}

export default List
