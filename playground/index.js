import React from 'react'
import { render } from 'react-dom'
import Button from '../components/atoms/button/Button'
import Modal from '../components/molecules/modal/Modal'
import useModal from '../components/molecules/modal/useModal'

const Playground = () => {

	const {isShowing, toggle} = useModal()

    return (
		<div className="App">
			<Button onClick={toggle} theme='primary'>Modal</Button>
			<Modal isShowing={isShowing} hide={toggle}>Hello this is a modal</Modal>
		</div>
    )
}

render(
    <Playground />,
    document.getElementById('root')
)