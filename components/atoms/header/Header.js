import React from 'react';
import './header.scss';
import classNames from 'classnames';

const Header = props => {

    const {
        children,
        headerType = 'h1',
        className = '',
        theme
    } = props;
    
    let header = '';

    let headerClass = classNames('a-header', className, {
        'a-header--primary': theme === 'primary',
        'a-header--primary-xl': theme === 'primary-xl',
        'a-header--primary-on-dark': theme === 'primary-dark',
        'a-header--primary-on-dark-xl': theme === 'primary-dark-xl',
        'a-header--secondary': theme === 'secondary',
        'a-header--secondary-xl': theme === 'secondary-xl',
        'a-header--secondary-on-dark': theme === 'secondary-dark',
        'a-header--secondary-on-dark-xl': theme === 'secondary-dark-xl',

    });

    switch (headerType) {
        case 'h1':
            header = <h1 className={headerClass}>{children}</h1>
            break;
        case 'h2':
            header = <h2 className={headerClass}>{children}</h2>
            break;
        case 'h3':
            header = <h3 className={headerClass}>{children}</h3>
            break;
        case 'h4':
            header = <h4 className={headerClass}>{children}</h4>
            break;
        case 'h5':
            header = <h5 className={headerClass}>{children}</h5>
            break;
        case 'h6':
            header = <h6 className={headerClass}>{children}</h6>
            break;
        default:
            header = <h1 className={headerClass}>{children}</h1>
    }

    return (
        header
    )

}

export default Header;