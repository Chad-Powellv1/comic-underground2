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

	// let startingComic = [
	// 	{
	// 		"id": 1,
	// 		"open_date": "2022-05-03T07:18:04.788539-04:00",
	// 		"close_date": "2022-05-03T07:12:54-04:00",
	// 		"minimum_bid": "10.00",
	// 		"seller": [
	// 			{
	// 				"id": 1,
	// 				"password": "pbkdf2_sha256$320000$wKgwJMgmkIwZtR4Axvtpsf$5vOawY77oDxqZhgluCUEeexs3v25Wb57dhvhN5FeEiI=",
	// 				"last_login": "2022-05-09T15:20:23.187888-04:00",
	// 				"is_superuser": true,
	// 				"username": "chad.powell",
	// 				"first_name": "",
	// 				"last_name": "",
	// 				"email": "test@admin.com",
	// 				"is_staff": true,
	// 				"is_active": true,
	// 				"date_joined": "2022-05-01T16:33:47.727310-04:00",
	// 				"groups": [],
	// 				"user_permissions": []
	// 			}
	// 		],
	// 		"auction_status": [
	// 			{
	// 				"id": 1,
	// 				"choice": "Active"
	// 			}
	// 		],
	// 		"items": [
	// 			{
	// 				"id": 2,
	// 				"title": "Marvel Team-Up",
	// 				"contributors": [
	// 					{
	// 						"id": 3,
	// 						"first_name": "Marvel",
	// 						"last_name": "Comics",
	// 						"role": [
	// 							{
	// 								"id": 3,
	// 								"con_role": "Created By"
	// 							}
	// 						]
	// 					}
	// 				],
	// 				"details": [
	// 					{
	// 						"id": 2,
	// 						"cover_date": 1978,
	// 						"publisher": "Marvel Comic Group",
	// 						"issue_number": 70,
	// 						"variant": false,
	// 						"virgin_cover": false,
	// 						"characters": "Spider-Man",
	// 						"choice": "Bronze Age",
	// 						"grade": "",
	// 						"cover_image": {
	// 							"id": 2,
	// 							"cover_image": "http://localhost:8000/media/images/61r8F-5nKkL.jpg"
	// 						}
	// 					}
	// 				]
	// 			}
	// 		]
	// 	}
	// ]


	const [comics, setComics] = useState([]);

	useEffect(() => {
		request({ url: AUCTION, method: 'get' }).then(resp => {
			setComics(resp.data);
		});
	}, []);

	console.log('comics: ', comics);

	let sliderOptions = {
		rewind: true,
		pagination: false,
		type: 'loop',
		perPage: 5,
		perMove: 1,
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
							src={comic.items?.[0].details?.[0].cover_image.cover_image.replace(
								'http://localhost:8000',
								'https://8000-chadpowellv1-comicapi-tiv0x3tc1cg.ws-us44.gitpod.io/'
							)}
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
