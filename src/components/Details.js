import React, { useState, useEffect } from 'react';
import { AUCTION } from '../services/auth.constants';
import request from '../services/api.request';
import { Container, Row, Col, Popover, OverlayTrigger, Button, Form } from 'react-bootstrap'


const popover = (
  <Popover id="popover-basic">
    <Popover.Header as="h3">Comic Book Details</Popover.Header>
    <Popover.Body>
      <Row>
        Contributors: 
        <Col> </Col>
      </Row>
      <Row>Publisher: </Row>
      <Row>Variant: </Row>
      <Row>Virgin Cover: </Row>
      <Row>Characters:
        <Col> </Col>
      </Row>
    </Popover.Body>
  </Popover>
);

const More = () => (
  <OverlayTrigger trigger="click" placement="right" overlay={popover}>
    <Button className='fancy fancy--highlight'> Details</Button>
  </OverlayTrigger>
);

export const Details = () => {
  //   const [comics, setComics] = useState(null);

  //   useEffect(() => {
  // 	request({ url: AUCTION, method: 'get' })
  //       .then(resp => {
  // 		setComics(resp.data);
  // 	});
  // }, []);
  
  return (
    <Container fluid="md">
      <Row>
        <Col className='item-image'>Comic Image</Col>
        <Col>
          <div className='item-title'>Comic Title</div>
          <div className='item-time'>auction time left</div>
          <div className='bid-block'>
            <Form>
              <div className='form-section'>
                <label for='bid-input'className='starting-bid'></label>
                <input id='bid-input' type='text'/>
                <div className='min-bid'>Enter US $</div>
              </div>
              <div className='right-form'>[Num of Bids]</div>
              <input type='submit' value='Place bid'/>
            </Form>
          </div>
        </Col>
        <Col> 
          <div className='item-issue'>Issue Number:</div>
          <div className='item-era'>Comic Era: </div>
          <div className='item-grade'>Grade: </div>
          <div className='item-coverDate'>Cover Date: </div>
          <More/>
        </Col>
      </Row>
    </Container>
  )
}
