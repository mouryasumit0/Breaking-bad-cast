import React, { useRef } from 'react';
import CharacterItem from './CharacterItem';

import './Characters.css';

const Characters = ({ items, isLoading}) => {
	const ref = useRef(null);
	const scrollLeft = (scrollOffset) => {
		ref.current.scrollBy({
			left:500,
			behavior: 'smooth'
		})
	};

	const scrollRight = (scrollOffset) => {
		ref.current.scrollBy({
			left:-500,
			behavior: 'smooth'
		})
	};

	return isLoading ? (<div className="title"><h1>Loading...</h1></div>
		) : ( <div className="wrapper">
		<div ref={ref} className="container">
		<button className="slide-left" type="button" onClick={() => scrollLeft()}><span>&lt;</span></button>
		
		{items.map((item) => (
			<CharacterItem key={item.char_id} item = {item}></CharacterItem>
			
			))}
		
		<button className="slide-right" type="button" onClick={() => scrollRight()}><span>&gt;</span></button>
		</div>
		</div>
		)
		
		
	}

	export default Characters