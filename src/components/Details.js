import React, { useState, useEffect, useRef } from 'react';
import * as cartService from '../services/cart';
import * as watchlistService from '../services/watchlist';
import request from '../services/api.request';
import AUCTION from '../services/auth.constants';

 
export const Details = () => {
    const [comics, setComics] = useState(null);

    const quantityRef = useRef(null);


    useEffect(() => {
		request({ url: AUCTION, method: 'get' })
        .then(resp => {
			setComics(resp.data);
		});
	}, []);

    const addToWatchlist = () => {
        watchlistService.addToWatchlist(comics);
    }

    const addToCart = () => {
        const quantity = quantityRef.current.value;
        comics.quantity = +quantity;
        cartService.addToCart(comics)
    }

    if (!comics) return <></>;

  return (
    <div className="item-detail">
      <div className="item">
        <img src={comics.items[0].details[0].cover_image.cover_image.replace('http://localhost:8000', 'https://8000-chadpowellv1-comicapi-tiv0x3tc1cg.ws-us43.gitpod.io/')} alt="product" />
      </div>
      <div className="item-info">
        <p className="item-name">{comics.items[0].title}</p>
        <p className="item-bid">{comics.minimum_bid}$</p>
        <div className="item-quantity">
          <span>Quantity: </span>
          <input className="item-detail-quantity" type="number" defaultValue={1} min={1} ref={quantityRef} />
        </div>
        <div className="item">
          <button onClick={addToWatchlist}>Add to Wishlist</button>
          <button onClick={addToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}
