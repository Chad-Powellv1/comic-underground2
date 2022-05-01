import { useState } from 'react';

const withModal = ModalComponent => WrapperComponent => {
  return function (props) { 
    const [isOpen, setIsOpen] = useState(false);
    
    return (
      <>
        <WrapperComponent toggleModal={setIsOpen} {...props} />
        {isOpen && <ModalComponent toggleModal={setIsOpen} />}
      </>
    )
  }
}

export default withModal;
