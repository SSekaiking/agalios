import React from 'react'
import Modal from 'react-modal';
Modal.setAppElement('#__next')

export default function create(props) {

    const [modalIsOpen, setIsOpen] = React.useState(false);

    function OpenModal(modalPath) {
        setIsOpen(true);
    }

    function CloseModal() {
        setIsOpen(false);
    }
    return (
        <React.Fragment>
            <div onClick={OpenModal}>
                {props.children}
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={CloseModal}
                className="Modal"
                overlayClassName="Overlay"
            >
            create
            <style global jsx>{`
            .Overlay{
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: #00000080;
                display: flex;
            }
            .Modal{
                margin: auto;
                background-color: papayawhip;
                height: 90vh;
                width: 800px;
                max-width: 100vw;
            }
            `}</style>
            </Modal>
        </React.Fragment>
    )
}
