import { AiOutlineClose } from "react-icons/ai";
import React from 'react';
import '../App.css'

export const Modal = (props) => {
    const { closeModal } = props;

    const closeIcon = () => (
        <AiOutlineClose
        onClick={closeModal}
        style={{
            cursor:'pointer',
            padding: '10px',
            border: 0,
            position: 'absolute',
            top: '0.3rem',
            right: '0.5rem',
        }}
        />
    );

  return (
    <div className='modal'>
        <div className='modal-content'>
            { closeIcon() }
            { props.children }
        </div>
    </div>
  )
}
