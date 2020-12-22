import React from 'react'
import ReactDOM from 'react-dom'
import './modal.scss'

const Modal = ({ isShowing, hide, children }) => isShowing ? ReactDOM.createPortal(
	<>
    	<div className="m-modal-overlay" />
    	<div className="m-modal-wrapper">
      		<div className="m-modal">
        		<div className="m-modal__header">
          			<button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
            			<span aria-hidden="true">&times;</span>
         			</button>
        		</div>
        		<p>
          			{children}
        		</p>
      		</div>
    	</div>
	</>, document.body
) : null

export default Modal;