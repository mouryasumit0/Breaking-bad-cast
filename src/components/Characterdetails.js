import React, { useEffect, useState } from 'react';
import Character from './Character';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Characterdetails.css'

const Characterdetails = props => { 
  let { query } = useParams();

  const [filterItem, setFilterItem] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch(`https://www.breakingbadapi.com/api/characters?name=${query}`);
      const responseData = await response.json();
      var characters = [];

      for (var i = responseData.length - 1; i >= 0; i--) {
        characters[i] = responseData[i]
      }
      setFilterItem(characters);
      
    }
    console.log(filterItem);
    fetchItems();
  },[query]);

  
  return ( filterItem.length===0 ? (<div style={{width: '200px', margin: 'auto'}}>Character not available</div>):(<div>
  
  <Link  to='/'>
  <button className="btn-home">back to home</button>
  </Link>
  {filterItem.map((item) => (
    <Character key = {item.char_id} item = {item}/>
    ))}
  </div>))
}
export default Characterdetails