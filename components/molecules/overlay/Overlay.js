import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Icon from '../../atoms/icon/Icon'
import classNames from 'classnames'
import './overlay.scss'
import CloseIcon from '../../../src/img/icons/cross.svg'

const Overlay = (props) => {

    const {
        isOpen = false,
        className,
        children
    } = props

    const [isShowing, setIsShowing] = useState(isOpen)

    const toggleOverlay = () => {
        setIsShowing(!isShowing)
    }

    const overlayClass = classNames('m-overlay__wrap', className, {
        'm-overlay__wrap--show': isShowing
    })

    return ReactDOM.createPortal(
        <>
            <div className={overlayClass}>
                <div className="m-overlay__background" onClick={toggleOverlay} />
                <div className="m-overlay">
                    <div className="m-overlay__container">
                        <div className="m-overlay__header">
                            <div>
                                <Icon
                                    svgImage={CloseIcon}
                                    svgWidth={18}
                                    svgHeight={18}
                                    isRound={true}
                                    svgFill="#011831"
                                    svgBorderColor="#60759e"
                                    className="m-overlay__icon"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                    onClick={toggleOverlay} />
                            </div>
                        </div>
                        <div className="m-overlay__content">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </>, document.body
    )
}

Overlay.propTypes = {
    isOpen: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.node
}

export default Overlay