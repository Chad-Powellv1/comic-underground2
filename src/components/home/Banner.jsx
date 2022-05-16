import React from 'react';
import image from '../../assets/banner.jpg';
import { Row, Col } from 'react-bootstrap';
import '../../App.css'

export const Banner = () => {
  return (
    <Row className='image-container justify-content-center text-centered'>
        <img src={image} alt='banner'
            style={{
                width:'100%',
                height:'12.5rem',
            }}  />
            <Col className='xs-6 lg-6 text mx-auto'>Comic Underground</Col>
            <Col className='xs-6 text2 mx-auto'>Lose yourself in an adventure today!</Col>
    </Row>
  )
}
