import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import Icon from '../icon/Icon'
import './chat.scss'
import ChatIcon from '../../../src/img/icons/chat.svg'

const Chat = props => {

    const {
        isSmall = false,
        className = '',
        children
    } = props

    const chatClass = classNames('a-chat', className, {
        'a-chat--small': isSmall
    })

    return(
        <div className={chatClass}>
            <span className="a-chat__label">{children}</span> <Icon svgWidth={25} svgHeight={25} svgFill="#fff" svgImage={ChatIcon} />
        </div>
    )
}

Chat.propTypes = {
    isSmall: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.string
}

export default Chat
