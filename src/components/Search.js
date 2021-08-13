import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Search.css';

const Search = ({ getQuery }) => {
	
	const [text, setText] = useState('');

	const onSubmit = (e) => {
		
		if(!text){
			alert("cannot be blank");	
		}
		else{
			getQuery(text);
		}
		e.preventDefault();	
	}
	

	return (
		<section className="title">
		<form onSubmit = {onSubmit}>
			<input type="text" 
			value={text} 
			className="form-control" 
			placeholder="Search characters" 
			autoFocus
			onChange={(e) => setText(e.target.value)}
			/>
			<Link to={`/${text}`}>
				<button className="btn" type="submit">Search</button>
			</Link>
		</form>
			
		</section>
	)
}

export default Search