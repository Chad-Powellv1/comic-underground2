import React, { useState, useEffect } from 'react';
import { Banner } from './Banner';
import { Card } from 'react-bootstrap';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import request from '../../services/api.request';
import { AUCTION } from '../../services/auth.constants';
import '../../App.css';
import { Link } from 'react-router-dom';

export function Slider() {
	const [comics, setComics] = useState([]);

	useEffect(() => {
		request({ url: AUCTION, method: 'get' })
			.then(resp => {
				localStorage.setItem('comics', JSON.stringify(resp.data))
				setComics(resp.data);
			});
	}, []);


	let sliderOptions = {
		rewind: true,
		pagination: false,
		type: 'loop',
		perPage: 5,
		perMove: 3,
		breakpoints: {
			1200: {
				perPage: 4,
			},
			990: {
				perPage: 3,
			},
			530: {
				perPage: 2,
			},
		},
	};

	let auction = comics.map(comic => {
		return (
			<SplideSlide key={comic.id}>
				<Link to={`/details/${comic.id}`} className='links'>
					<Card
						style={{
							width: '15rem',
							marginTop: '2rem',
							marginLeft: 'auto',
							marginRight: 'auto',
						}}
					>
						<Card.Img
							className='image-card'
							src={comic.items?.[0].details?.[0].cover_image.cover_image}
						/>

						<Card.Body>
							<Card.Title className='text-center'>
								{comic.items?.[0].title}
							</Card.Title>
							<Card.Text className='text-center'>
								Issue No: {comic.items?.[0].details?.[0].issue_number}
							</Card.Text>
							<Card.Text className='text-center'>
								Current Bid: {comic.minimum_bid}
							</Card.Text>
						</Card.Body>
					</Card>
				</Link>
			</SplideSlide>
		);
	});
	return <Splide options={sliderOptions}>{auction}</Splide>;
}

export const Home = () => {
	return (
		<div className='home'>
			<Banner />
			<Slider />
		</div>
	);
};
