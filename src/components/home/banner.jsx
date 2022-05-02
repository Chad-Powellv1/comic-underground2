import React from 'react';
import image from '../../assets/banner.jpg';

export const Banner = () => {
  return (
    <div className='image-container'>
        <img src={image} alt='banner'
            style={{
                width:'100%',
                height:'25rem',
            }}  />
        <div className='centered text-centered'>
            <h1 className='text'>Comic Underground</h1>
            <h4 className='text2'>Lose yourself in an adventure today!</h4>
        </div>
    </div>
  )
}
