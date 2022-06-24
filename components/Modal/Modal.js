import { forwardRef, useState, useImperativeHandle } from 'react'
import { createPortal } from 'react-dom'

const Modal = forwardRef(({ title, children }, ref) => {
	const [show, setShow] = useState(false)

	useImperativeHandle(ref, () => {
		return {
			openModal: () => openModal(),
			closeModal: () => closeModal(),
		}
	})

	const openModal = () => setShow(true)
	const closeModal = () => setShow(false)

	if (show) {
		return createPortal(
			<div className='modal'>
				<div className='modal-card'>
					<div className='modal-top'>
						<h3>{title}</h3>
						<p onClick={closeModal}>X</p>
					</div>
					<hr />
					{children}
				</div>
			</div>,
			document.getElementById('modal-root')
		)
	}

	return null
})

export default Modal
