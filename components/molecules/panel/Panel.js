import React from 'react'
import classNames from 'classnames'
import Button from '../../atoms/button/Button'
import Link from '../../atoms/link/Link'

const Panel = props => {

    const {
        children,
        className = '',
        hasButton = false,
        hasLink = false
    } = props

	const panelClass = classNames('m-panel', className)

    const renderButton = () =>
        <div className='m-panel__btn'>
            <Button theme='primary'>Button</Button>
        </div>

    const renderLink = () =>
        <div className='m-panel__link'>
            <Link href='https://www.hastingsdirect.com/'>Link Example</Link>
        </div>

	return (
		<div className={panelClass}>
            <p>{children}</p>
			{hasButton ? renderButton() : null}
            {hasLink ? renderLink() : null}
		</div>
	)
}

export default Panel