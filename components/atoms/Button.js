import React from 'react';
import '../../scss/atoms/button.scss'

const Button = (props) => {

    const {
        children,
        type = 'button'
    } = props;

    return(
        <button className="a-btn" type={type}>{children}</button>
    )

}

export default Button;