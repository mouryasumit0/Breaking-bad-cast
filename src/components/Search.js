import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Search.css';

const Search = (props) => {
	 const [text , setText] = useState(() => '');
	let handleChange = (e) => {
 	    setText(e.target.value); 
 	 };

  	let handleClick=(e)=>{ 
 	    setText(e.target.value);
 	    console.log(text)
 	 }
 	 
	return (
		<section className="title">
		<form onSubmit={handleClick}>
			<input type="text"
			value={text}
			className="form-control" 
			placeholder="Search characters"
			onChange={handleChange} 
			autoFocus
			/>
			<Link to={`/${text}`}>
				<button className="btn" type="submit" onClick={handleClick}>Search</button>
			</Link>
		</form>
			
		</section>
	)
}

export default Search