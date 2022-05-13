import React from 'react';
import image from '../../assets/banner.jpg';
import { Row, Col } from 'react-bootstrap';
import '../../App.css'

export const Banner = () => {
  return (
    <Row className='image-container'>
        <img src={image} alt='banner'
            style={{
                width:'100%',
                height:'12.5rem',
            }}  />
        <Row className='text-centered'>
            <Col className='text mx-auto'>Comic Underground</Col>
            <Col className='text2'>Lose yourself in an adventure today!</Col>
        </Row>
    </Row>
  )
}
