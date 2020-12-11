import React from 'react';

const Button = (props) => {

    const {
        children,
        type = 'button'
    } = props;

    return(
        <button type={type}>{children}</button>
    )

}

export default Button;