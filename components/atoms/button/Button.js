import React from 'react';
import classNames from 'classnames';
import './button.scss';

const Button = props => {

    const {
        children,
        type = 'button',
        theme = ''
    } = props;

    const buttonClass = classNames('a-btn', className, {
        'a-btn--primary': theme === 'primary',
        'a-btn--secondary': theme === 'secondary',

    });

    return(
        <button className={buttonClass} type={type}>{children}</button>
    )

}

export default Button;