import { AiOutlineClose } from "react-icons/ai";
import React from 'react';
import '../App.css'

export const Modal = (props) => {
    return (
        <div className='modal'>
            <div className='modal-content'>
                <AiOutlineClose 
                    onClick={() => props.history.goBack()}
                    style={{
                    cursor:'pointer',
                    padding: '10px',
                    border: 0,
                    position: 'absolute',
                    top: '0.3rem',
                    float: 'right',
                    color: 'black', 
                    }}
                />
                { props.children }
            </div>
        </div>
    );
};
  