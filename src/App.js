  import React, { useState, useEffect } from 'react';
  import './App.css';
  import Header from './components/Header';
  import Characters from './components/Characters';
  import Search from './components/Search';
  import Characterdetails from './components/Characterdetails';
  import {
    BrowserRouter as Router,
    Switch,
    Route,
    
  } from "react-router-dom";


  const App = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const [query, setQuery] = useState('');

    useEffect(() => {
        const fetchItems = async () => {
        const response = await fetch(`https://www.breakingbadapi.com/api/characters`);
        const responseData = await response.json();
        var characters = [];

        for (var i = responseData.length - 1; i >= 0; i--) {
          characters[i] = responseData[i]
        }
        setItems(characters);
        setIsLoading(false);
        
        }

      fetchItems();
    },[]);

    return (
      <Router>
        
        <Switch>
          <Route exact path="/" render={()=>{
            return (<>
              <div className="heading">
                <Header/>
                <Search query={query} getQuery={(q) => setQuery(q)}/>
              </div>
              <Characters isLoading={isLoading} items={items}/>
              </>)
              }}>
          </Route>
          <Route path="/character/:query" children = {<Characterdetails items={items}/>} >
          </Route>
        </Switch>

      </Router>
    );
  }

  export default App;
