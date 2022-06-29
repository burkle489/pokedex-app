import ReactDOM from 'react-dom'
import React from 'react'
import '../styles/modal.scss'
import { IoMdClose } from 'react-icons/io'

export const Modal: React.FC<ModalProps> = ({ children, onClose, title }) => {
    const modalRoot = document.getElementById('ModalPortal')
    return (
        modalRoot &&
        ReactDOM.createPortal(
            <div className="Modal">
                <div className="ModalContainer">
                    <div className="ModalHeader">
                        <h2>{title}</h2>
                        <IoMdClose
                            size={50}
                            color="#000000"
                            className="ModalClose"
                            onClick={onClose}
                        />
                    </div>
                    {children}
                </div>
            </div>,
            modalRoot
        )
    )
}

type ModalProps = {
    children: React.ReactNode
    onClose: () => void
    title: string
}
