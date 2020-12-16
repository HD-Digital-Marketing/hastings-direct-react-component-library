import React from 'react';
import './title.scss';
import classNames from "classnames";

const Title = (props) => {

    const {
        children,
        titleType = 'h1',
        theme
    } = props;
    let title = '';

    let titleClass = classNames({
        'a-title': true,
        'a-title--primary': theme === 'primary',
        'a-title--secondary': theme === 'secondary',

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

export default Title;