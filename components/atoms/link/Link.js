import React from 'react';
import classNames from 'classnames';
import './link.scss';

const Link = (props) => {

	const {
		children,
		rel = '',
		target = '',
		to = '',
		type = ''
	} = props;

	let linkClass = classNames({
		'a-link-image': true,
		'a-link-image__image': true,
		'a-link-image__title': true,
		'external': true
	});

	return(
		<a to={to} className={linkClass} rel={rel}>{children}</a>
	)

}

export default Link;