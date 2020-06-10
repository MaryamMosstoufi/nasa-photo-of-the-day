import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import NASA_KEY from './config.js';
import Hero from './components/Hero/Hero.js';

const nasaAPI = 'https://api.nasa.gov/planetary/apod?api_key=' + NASA_KEY;



function App() {
  const [imageOfDay, setImageOfDay] = useState([]);



  useEffect(() => {
    axios.get(`${nasaAPI}`)
      .then(response => {
        setImageOfDay(response.data);
        console.log('axios response: ', response.data)
      })
      .catch(error => {
        console.log('axios error: ', error);
      })
  }, [])

  return (
    <div className='App'>
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role='img' aria-label='go!'>🚀</span>!
      </p>
      {/* <Header /> */}
      <Hero imageOfDay={imageOfDay} />
      {/* <Main /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;

//WireFrame --------------------------
  //APP
    //Header
      //Logo
      //Search
      //Filter
      //Menu
        //Archives
        //Submissions
        //Calendar
        //RSS
        //Education
        //About
        //Discuss
    //Hero
      //Image of The Day
      // Info
        //Date
        //Title
        //Credit & Copyright
        //Explanation
      // Prev Next Pagination
    //Main
      //Masonry Grid
        //Cards
          //Header
          //Image
          //Footer
      //Pagination
    //Footer
      //Authors & Editors
      //Social Links
//------------------------------------