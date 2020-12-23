import React from 'react'
import classNames from 'classnames'

const Panel = props => {

    const {
        children,
        className = '',
        isTest = false
    } = props

	const panelClass = classNames('m-panel', className)

    const renderAnchor = () =>
        <a>Link</a>

	return (
		<div className={panelClass}>
			{isTest ? renderAnchor() : null}
		</div>
	)
}

export default Panel