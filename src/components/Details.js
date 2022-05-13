import React, { useState, useEffect } from 'react';
import { AUCTION, BID } from '../services/auth.constants';
import request from '../services/api.request';
import { useGlobalState } from '../context/GlobalState';
import { Container, Row, Col, Popover, OverlayTrigger, Button, Form } from 'react-bootstrap'
import { useParams } from 'react-router';
import moment from 'moment';


export const Details = () => {
  const { auction } = useParams(null);
  const [currentAuction, setCurrentAuction] = useState({});
  const [now, setNow] = useState();
  const endDate = moment(currentAuction.close_date);
  const [state, dispatch] = useGlobalState();
  const [highestBid, setHighestBid] = useState({});
  const [bid, setBid] = useState({
    bidder: state.currentUser?.user_id,
    bid_amount: 0,
    auction: currentAuction
  });

  console.log('CURRENT AUCTION: ', currentAuction)

  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">{currentAuction.items?.[0].title}</Popover.Header>
      <Popover.Body>
        <Row className='mb-1'><strong>Contributors:</strong></Row>
        <div className='mb-2'>
          {currentAuction.items?.[0].contributors?.[0].first_name} {currentAuction.items?.[0].contributors?.[0].last_name}, {currentAuction.items?.[0].contributors?.[0].role?.[0].con_role}
        </div>
        <Row className='mb-2'><strong>Publisher: </strong>
          <div className='pub'>
            {currentAuction.items?.[0].details?.[0].publisher}
          </div>
        </Row>
        <Row className='mb-2'><strong>Variant: </strong>
          <div className='variant'>
            {currentAuction.items?.[0].details?.[0].variant === "{false}" ? "Yes" : "No"}
          </div>
        </Row>
        <Row className='mb-2'><strong>Virgin Cover: </strong>
          <div className='v-cover'>
            {currentAuction.items?.[0].details?.[0].virgin_cover === "{false}" ? "Yes" : "No"}
          </div>
        </Row>
        <Row className='mb-2'><strong>Characters:</strong>
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

  const handleChange = (e) => {
    setBid({
      ...bid,
      [e.target.name]: e.target.value
    })
  };

  let handleBid = async (e) => {
    e.preventDefault();
    let nextBid = new FormData();
    nextBid.append('bidder', state.currentUser?.user_id);
    nextBid.append('bid_amount', bid.bid_amount);
    nextBid.append('auction', currentAuction.id);

    let resp = request({
      url: BID,
      method: 'post',
      data: nextBid,
    })
    resp.then((resp) => {
      setBid(resp.data);
      window.location.reload();
    })
  };

  useEffect(() => {
    // Get auction data only.
    request({ url: AUCTION + auction + '/', method: 'get' })
      .then(resp => {
        setCurrentAuction(resp.data)
      });

    // Function to get the highest bid
    const getHighestBid = () => request({ url: `auction/` + auction + '/highest-bid', method: 'get' })
      .then(resp => {
        setHighestBid(resp.data)
        console.log('USER DATA: ', resp.data)
      });
    getHighestBid()

  
    const pollData = setInterval(() => {
      getHighestBid();
    }, 1000)

    const interval = setInterval(() => {
      setNow(moment());
    }, 1000);

    return () => {
      clearInterval(interval)
      clearInterval(pollData)
    }
  }, [auction]);

  if (!currentAuction) return null

  const calcTimeLeft = () => {
    const currentTime = now;
    const timeDiff = endDate.diff(currentTime)
    const duration = moment.duration(timeDiff);
    const hours = duration.asHours();
    // console.log(timeDiff)
    if (hours > 0) {
      return moment(timeDiff).format('D [days] hh:mm:ss');
    } 
    return 'Auction has ended.'
  }


  return (
    <Container fluid="md">
      <Row className='justify-content-center gap-5'>
        {/* Defensive programming. Optional chaining
        https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining */}
        <Col className='item-image' xs='12' lg='4'><img src={currentAuction.items?.[0].details?.[0].cover_image?.cover_image.replace('http://localhost:8000', 'https://8000-chadpowellv1-comicapi-tiv0x3tc1cg.ws-us45.gitpod.io/')} alt='' /></Col>
        <Col className='col-item-info ' xs='12' lg='4'>
          <div className='item-title'>{currentAuction.items?.[0].title}</div>
          <div className='item-time'>{calcTimeLeft()}</div>
          <div className='bid-block'>
            <Form onSubmit={handleBid} >
              <div className='form-section'>
                <div className='current-bid'>Current Bid: ${highestBid?.bid_amount}</div>
                <div className='current-bid'>Highest Bidder: {highestBid?.bidder?.username}</div>
                <label htmlFor='bid-input' className='enter-bid'>Enter bid:</label>
                <input id='bid-input'
                  className='bid-input'
                  type='text'
                  value={bid.bid_amount}
                  name='bid_amount'
                  onChange={handleChange}

                />
                <div className='min-bid'>Enter US $</div>
              </div>
              <button
                className='place-bid'
                type='submit'
                value='Place bid'>
                Place Bid
              </button>
            </Form>
          </div>
          <div>
            <div className='item-issue'><strong>Issue Number :</strong> #{currentAuction.items?.[0].details?.[0].issue_number}</div>
            <div className='item-coverDate'><strong>Cover Date: </strong> {currentAuction.items?.[0].details?.[0].cover_date}</div>
            <div className='item-era'><strong>Comic Era: </strong> {currentAuction.items?.[0].details[0].choice}</div>
            <div className='item-grade'><strong>Grade: </strong> {currentAuction.items?.[0].details[0].grade}</div>
            <More />
          </div>
        </Col>
      </Row>
    </Container>
  )
}
