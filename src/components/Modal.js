import { useState } from 'react';

const withModal = ModalComponent => WrapperComponent => {
  return function (props) { 
    const [isOpen, setIsOpen] = useState(false);
    
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