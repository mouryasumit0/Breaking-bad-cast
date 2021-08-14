import React, { useEffect, useState } from 'react';
import Character from './Character';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Characterdetails.css'

const Characterdetails = props => { 
  let { name } = useParams();

  const [filterItem, setFilterItem] = useState(() => []);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true);
      const response = await fetch(`https://www.breakingbadapi.com/api/characters?name=${name}`);
      const responseData = await response.json();
      setFilterItem(responseData);
      setIsLoading(false);
      console.log(responseData)
      
    }
    fetchItems();
  },[name]);

  
  return (isLoading ? (<h1>wait..</h1>) : ( filterItem.length===0 ? (<div style={{width: '200px', margin: 'auto'}}><h1>Character not available</h1> <Link  to='/'>
  <button className="btn-home">back to home</button>
  </Link></div>):(<div>
  
  <Link  to='/'>
  <button className="btn-home">back to home</button>
  </Link>
  {filterItem.map(item => (
    <Character key = {item.char_id} item = {item} isLoading={isLoading}/>
    ))}
  </div>)))
}
export default Characterdetails