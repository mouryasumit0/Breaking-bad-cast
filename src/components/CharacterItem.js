import React from 'react';
import './CharacterItem.css';
import {Link} from 'react-router-dom';

const CharacterItem = (props) => {
return (
	<div className="item">
		<Link className="itemL" to={`/${props.item.name.replace(/\s+/g, "+")}` }>
		<img src={props.item.img} className="image" alt=""  height="300px"/>
		
	<div className="content" id={props.item.char_id}>
		<h3>Name: {props.item.name}</h3>
		<p>Occupations: {props.item.occupation.join(` `)}</p>
		<p>DOB: {props.item.birthday}</p>
		<p>Status: {props.item.status}</p>
	</div>
	</Link>
	</div>  
)
}


export default CharacterItem

