import React from 'react'
import ReactDOM from 'react-dom'
import './modal.scss'

const Modal = ({ isShowing, hide }) => isShowing ? ReactDOM.createPortal(
	<>
		<div className="modal">
			<h1>Hello Modal</h1>
		</div>
	</>, document.body
) : null

export default Modal;