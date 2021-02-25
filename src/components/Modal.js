import React from 'react';
import Modal from 'react-modal';
const customStyles = {
    content: {
        top: 20,
        left: 20,
        right: 20,
        bottom: 20,
        margin: "auto auto",
        maxWidth: 800,
        height: "fit-content",
        maxHeight: "90vh",
        padding: '30px 10px',
    },
    overlay: {
        backgroundColor: "rgba(0, 0, 0, 0.9)",
    },
};

const MyModal = ({ children, ...props }) => {
    return (
        <Modal
            {...props}
            style={customStyles}
        >
            {children}
        </Modal>
    )
}

export default MyModal;