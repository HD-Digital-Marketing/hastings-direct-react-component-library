import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Icon from '../../atoms/icon/Icon'
import classNames from 'classnames'
import './drawer.scss'
import CloseIcon from '../../../src/img/icons/cross.svg'

const Drawer = (props) => {

    const {
        isOpen = false,
        toggleDrawer,
        className,
        children
    } = props

    const drawerClass = classNames('m-drawer__wrap', className, {
        'm-drawer__wrap--show': isOpen
    })

    return ReactDOM.createPortal(
        <>
            <div className={drawerClass}>
                <div className="m-drawer__background" onClick={toggleDrawer} />
                <div className="m-drawer">
                    <div className="m-drawer__container">
                        <div className="m-drawer__header">
                            <div>
                                <Icon
                                    svgImage={CloseIcon}
                                    svgWidth={18}
                                    svgHeight={18}
                                    isRound={true}
                                    svgFill="#011831"
                                    svgBorderColor="#60759e"
                                    className="m-drawer__icon"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                    onClick={toggleDrawer} />
                            </div>
                        </div>
                        <div className="m-drawer__content">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </>, document.body
    )
}

Drawer.propTypes = {
    isOpen: PropTypes.bool,
    toggleDrawer: PropTypes.func,
    className: PropTypes.string,
    children: PropTypes.node
}

export default Drawer