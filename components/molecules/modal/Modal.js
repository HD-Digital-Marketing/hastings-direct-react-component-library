import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Button from '../../atoms/button/Button'
import './modal.scss'

const Modal = ({ isShowing, hide, children }) => isShowing ? ReactDOM.createPortal(
	<>
    	<div className="m-modal-overlay" />
    	<div className="m-modal-wrapper">
      		<div className="m-modal__container">
        		<div className="m-modal__header">
        			<div>
         				<Button data-dismiss="modal" aria-label="Close" onClick={hide}>&times;</Button>
         			</div>
        		</div>
        		<div className="m-modal__content">
          			{children}
        		</div>
      		</div>
    	</div>
	</>, document.body
) : null

Modal.propTypes = {
	isShowing: PropTypes.bool,
	hide: PropTypes.func,
	children: PropTypes.string
}

export default Modal