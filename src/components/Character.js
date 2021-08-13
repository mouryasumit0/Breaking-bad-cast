import React, { useEffect, useState } from 'react';
import './Character.css';
import Spinner from './Spinner';



export default function Character(props) {

	const [quotes, setQuotes] = useState([]);
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		const fetchItems = async () => {
			const response = await fetch(`https://www.breakingbadapi.com/api/quote?author=${props.item.name}`);
			const responseData = await response.json();
			var characters = [];

			for (var i = responseData.length - 1; i >= 0; i--) {
				characters[i] = responseData[i]
			}
			setQuotes(characters);
			setIsLoading(false);

		}

		fetchItems();
	},[props.item.name]);

	return (
		isLoading ? (<h1><Spinner/></h1>):(<div className="wrap">
			<div className="background">
				<div className="left">
				<div className="wrap-container">
					<h2 className="name-title">Name: {props.item.name}</h2>
					<p>Occupations: {props.item.occupation}</p>
					<p>DOB: {props.item.birthday}</p>
					<p>Status: {props.item.status}</p>
					<p>Nickname: {props.item.nickname}</p>
					<p>Appearance in Episodes: {props.item.appearance.join(`, `)}</p>
					<figcaption><h3>Quotes:</h3>{quotes.map(quote => <p key={quote.quote_id}><q>{quote.quote}</q> </p>)}</figcaption>
					</div>	
				</div> 
				<div className="right">
					<img src={props.item.img} alt=""/>
				</div>
			</div>
		</div>)
		)
	}