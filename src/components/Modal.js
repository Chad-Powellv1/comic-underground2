import React, { useState } from 'react';
import '../App.css'

export const Modal = ({children}) => {
  const [isOpen, setIsOpen] = useState(false);

  const close = () => {
    setIsOpen(false);
  }

    return (
        <div className='modal'>
            <div className='modal-content'>
            { children }
            </div>
        </div>
    );
};
