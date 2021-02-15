import React from 'react';
import './header.scss';
import classNames from "classnames";

const Header = (props) => {

    const {
        children,
        titleType = 'h1',
        className = '',
        theme
    } = props;
    let title = '';

    let titleClass = classNames('a-header', className, {
        'a-header--primary': theme === 'primary',
        'a-header--primary-xl': theme === 'primary-xl',
        'a-header--primary-on-dark': theme === 'primary-dark',
        'a-header--primary-on-dark-xl': theme === 'primary-dark-xl',
        'a-header--secondary': theme === 'secondary',
        'a-header--secondary-xl': theme === 'secondary-xl',
        'a-header--secondary-on-dark': theme === 'secondary-dark',
        'a-header--secondary-on-dark-xl': theme === 'secondary-dark-xl',

    });

    switch (titleType) {
        case 'h1':
            title = <h1 className={titleClass}>{children}</h1>
            break;
        case 'h2':
            title = <h2 className={titleClass}>{children}</h2>
            break;
        case 'h3':
            title = <h3 className={titleClass}>{children}</h3>
            break;
        case 'h4':
            title = <h4 className={titleClass}>{children}</h4>
            break;
        case 'h5':
            title = <h5 className={titleClass}>{children}</h5>
            break;
        case 'h6':
            title = <h6 className={titleClass}>{children}</h6>
            break;
        default:
            title = <h1 className={titleClass}>{children}</h1>
    }

    return (
        title
    )

}

export default Header;