import React from 'react';
import classNames from 'classnames';
import './list.scss';

const List = (props) => {

    const {
        children,
        type = 'list',
        theme = ''
    } = props;

    let listClass = classNames({
        'a-list': true,
        'a-list--primary': theme === 'primary',
        'a-list--secondary': theme === 'secondary',

    });

    return(
        <ul className={listClass} type={type}>{children}</ul>
    )

}

export default List;
