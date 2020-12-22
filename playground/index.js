import React from 'react'
import {render} from 'react-dom'
import Modal from '../components/molecules/modal/Modal'
import useModal from '../components/molecules/modal/useModal'

const Playground = () => {

	const {isShowing, toggle} = useModal()

    return (
        <>
            <div className="App">
            	<button className="button-default" onClick={toggle}>Show Modal</button>
            	<Modal isShowing={isShowing} hide={toggle} />
            </div>
        </>
    )
}

render(
    <Playground />,
    document.getElementById('root')
)