import React from 'react';

const Title = (props) => {

    const {
        children,
        titleType = 'h1'
    } = props;
    let title = '';

    switch (titleType) {
        case 'h1':
            title = <h1>{children}</h1>
            break;
        case 'h2':
            title = <h2>{children}</h2>
            break;
        case 'h3':
            title = <h3>{children}</h3>
            break;
        case 'h4':
            title = <h4>{children}</h4>
            break;
        case 'h5':
            title = <h5>{children}</h5>
            break;
        case 'h6':
            title = <h6>{children}</h6>
            break;
        default:
            title = <h1>{children}</h1>
    }

    return (
        title
    )

}

export default Title;