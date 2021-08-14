  import React, { useState, useEffect } from 'react';
  import Header from './components/Header'; 
  import Characters from './components/Characters';
  import Search from './components/Search';
  import Characterdetails from './components/Characterdetails';
  import {
    BrowserRouter as Router,
    Switch,
    Route,
    
  } from "react-router-dom";
  import './App.css';


  const App = () => {
    const [items, setItems] = useState(() => {return []});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchItems = async () => {
        
        setIsLoading(true)

        const response = await fetch(`https://www.breakingbadapi.com/api/characters`);
        const responseData = await response.json();

        setItems(responseData);
        setIsLoading(false);
        
        }
 
      fetchItems();
    },[]);

    return (
      <Router>
        
        <Switch>
          <Route exact path="/" render={()=>{
            return (
              <>
              <div className="heading">
                <Header/>
                <Search/>
              </div>
              <Characters isLoading={isLoading} items={items}/>
              </>
              )
              }}>
          </Route>
          <Route path="/:name" children = {<Characterdetails items={items}/>}/>
          
        </Switch>

      </Router>
    );
  }

  export default App;
