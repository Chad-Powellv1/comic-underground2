import { AiOutlineClose } from "react-icons/ai";
import React from 'react';
import '../App.css'

export const Modal = ({children, handleClose}) => {
    return (
        <div className='modal'>
             <AiOutlineClose 
                    onClick={handleClose}
                    style={{
                    cursor:'pointer',
                    padding: '10px',
                    border: 0,
                    position: 'absolute',
                    top: '0.3rem',
                    float: 'right',
                    }}
                />
            <div className='modal-content'>
                { children }
            </div>
        </div>
    );
};
