import './App.css';
import React, { useState, useEffect } from 'react';
import { useRoutes } from 'react-router-dom'
import Gifts from './pages/Gifts'
import GiftDetails from './pages/GiftDetails'
import PageNotFound from './pages/PageNotFound'
import CreateGift from './pages/CreateGift'
import EditGift from './pages/EditGift'
import { Link } from 'react-router-dom'

const App = () => {
  
  const [gifts, setGifts] = useState([]);
  const [error, setError] = useState([]);
  const [loading, setLoading] = useState([]);


  useEffect(() => {

    const fetchGifts = async() => {
        try {
          const response = await fetch("http://localhost:3001/gifts");

          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const result = await response.json();
          
          setGifts(result);
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        } 
    };
    
    fetchGifts();
  }, []);


  // Sets up routes
  let element = useRoutes([
    {
      path: "/",
      element:<Gifts data={gifts}/>
    },
    {
      path:"/gift/:id",
      element: <GiftDetails data={gifts} />
    },
    {
      path:"/*",
      element: <PageNotFound />
    },
    {
      path: '/new',
      element: <CreateGift />
    },
    {
      path: '/edit/:id',
      element: <EditGift data={gifts} />
    },
  ]);

  // if (loading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error.message}</div>;
  
  return ( 

    <div className="App">
      <header>
        <div className="header-container">
          <div className="header-left">
            <img src="/logo.png"/>
            <h1>UnEarthed</h1>
          </div>
          <div className="header-right">
            <Link to='/new'><button className='addBtn'>+ Add Gift</button></Link>
            <Link to="/"><button className="homeBtn">Home</button></Link>
          </div>
        </div>
      </header>

        {element}
        
    </div>

  );
}

export default App;