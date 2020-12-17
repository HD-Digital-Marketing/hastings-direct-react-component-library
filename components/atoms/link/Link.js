import React from 'react';
import classNames from 'classnames';
import './link.scss';

const Link = (props) => {

	const {
		children,
		type = ''
	} = props;

	let linkClass = classNames({
		'a-link-image': true,
		'a-link-image__image': true,
		'a-link-image__title': true,
		'external': true
	});

	return(
		<a className={linkClass}>{children}</a>
	)

}

export default Link;