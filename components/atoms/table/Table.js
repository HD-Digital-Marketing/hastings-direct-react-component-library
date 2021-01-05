import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import './table.scss'

const Table = props => {

    const {
        tableHeaders,
        tableData,
        theme = '',
        className = ''
    } = props

    const tableClass = classNames('a-table', className, {
        'a-table--primary': theme === 'primary',
        'a-table--secondary': theme === 'secondary'
    })

    const headers = tableHeaders.map((value, index) =>
        <th key={index}>{value}</th>
    )

    const bodyItems = tableData.map((value, index) =>
        <tr key={index}>
            {value.map((value, index) =>
                <td key={index}>{value}</td>
            )}
        </tr>
    )

    return (
        <table className={tableClass}>
            <thead>
            <tr>
                {headers}
            </tr>
            </thead>
            <tbody>
                {bodyItems}
            </tbody>
        </table>
    );
}

Table.propTypes = {
    tableHeaders: PropTypes.array,
    tableData: PropTypes.array,
    theme: PropTypes.string,
    className: PropTypes.string,
}

export default Table;
