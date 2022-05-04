import React, { useState, useEffect } from 'react';
import { AUCTION } from '../services/auth.constants';
import request from '../services/api.request';
import { Container, Row, Col, Popover, OverlayTrigger, Button, Form } from 'react-bootstrap'
import { useParams } from 'react-router';


export const Details = () => {
  const { auction } = useParams(null);
  const [currentAuction, setCurrentAuction] = useState({})

  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">{currentAuction.items?.[0].title}</Popover.Header>
      <Popover.Body>
        <Row className='mb-1'><strong>Contributors:</strong></Row> 
            <div>
              {currentAuction.items?.[0].contributors?.[0].first_name} {currentAuction.items?.[0].contributors?.[0].last_name},
              {currentAuction.items?.[0].contributors?.[0].con_role?.[3]}
            </div>        
        <Row className='mb-1'><strong>Publisher:</strong>
          <div>
            {currentAuction.items?.[0].details?.[0].publisher}
          </div>
         </Row>
        <Row className='mb-1'><strong>Variant:</strong>
          <div>
            {currentAuction.items?.[0].details?.[0].variant}
          </div>
        </Row>
        <Row className='mb-1'><strong>Virgin Cover:</strong>
          <div>
            {currentAuction.items?.[0].details?.[0].virgin_cover}
          </div>
        </Row>
        <Row className='mb-1'><strong>Characters:</strong>
          <div>
          {currentAuction.items?.[0].details?.[0].characters}
          </div>
        </Row>
      </Popover.Body>
    </Popover>
  );
  
  const More = () => (
    <OverlayTrigger trigger="click" placement="right" overlay={popover}>
      <Button className='more-info'> Details</Button>
    </OverlayTrigger>
  );


  useEffect(() => {
    if (auction) {
      request({ url: AUCTION + auction + '/', method: 'get' })
        .then(resp => {
          console.log('FROM USEEFFECT IN DETAILS', resp.data)
          setCurrentAuction(resp.data)
        });
    }
  }, [auction]);
  if (!currentAuction) return null

  return (
    <Container fluid="md">
      <Row className='justify-content-center gap-5'>
        {/* Defensive programming. Optional chaining
        https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining */}
        <Col className='item-image' xs='12' lg='4'><img src={currentAuction.items?.[0].details?.[0].cover_image?.cover_image.replace('http://localhost:8000', 'https://8000-chadpowellv1-comicapi-tiv0x3tc1cg.ws-us43.gitpod.io/')} alt=''/></Col>
        <Col className='col-item-info ' xs='12' lg='4'>
          <div className='item-title'>{currentAuction.items?.[0].title}</div>
          <div className='item-time'>auction time left</div>
          <div className='bid-block'>
            <Form >
              <div className='form-section'>
                <div className='current-bid'>Current Bid: ${currentAuction.minimum_bid}</div>
                <label htmlFor='bid-input' className='enter-bid'>Enter bid:</label>
                <input id='bid-input' className='bid-input' type='text' />
                <div className='min-bid'>Enter US $</div>
              </div>
              <input className='place-bid' type='submit' value='Place bid' />
            </Form>
          </div>
          <div>
            <div className='item-issue'><strong>Issue Number:</strong> #{currentAuction.items?.[0].details?.[0].issue_number}</div>
            <div className='item-coverDate'><strong>Cover Date:</strong> {currentAuction.items?.[0].details?.[0].cover_date}</div>
            <div className='item-era'><strong>Comic Era:</strong> {currentAuction.items?.[0].details[0].choice}</div>
            <div className='item-grade'><strong>Grade:</strong>{currentAuction.items?.[0].details[0].grade}</div>
            <More />
          </div>
        </Col>
      </Row>
    </Container>
  )
}
