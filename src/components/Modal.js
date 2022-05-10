import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import '../App.css'

export const Modal = ({children}) => {
  const [ setIsOpen ] = useState(false);

  const close = () => {
    setIsOpen(false);
  }

    return (
        <div className='modal'>
            <div className='modal-content'>
            <AiOutlineClose onClick={close()}
              style={{ float:'right'}}
            />
            { children }
            </div>
        </div>
    );
};
