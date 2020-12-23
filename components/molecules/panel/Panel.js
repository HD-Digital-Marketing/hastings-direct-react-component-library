import React from 'react'
import classNames from 'classnames'

const Panel = props => {

    const {
        children,
        className = ''
    } = props

	const panelClass = classNames('a-panel', className)

	return (
		<div className={panelClass}>{children}</div>
	)
}

export default Panel