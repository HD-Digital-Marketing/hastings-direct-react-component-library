import React from 'react';
import classNames from 'classnames';
import './button.scss';

const Button = (props) => {

    const {
        children,
        type = 'button',
        theme = ''
    } = props;

    let btnClass = classNames({
        'a-btn': true,
        'a-btn--primary': theme === 'primary',
        'a-btn--secondary': theme === 'secondary',

    });

    return(
        <button className={btnClass} type={type}>{children}</button>
    )

}

export default Button;