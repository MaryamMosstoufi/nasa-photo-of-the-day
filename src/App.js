import React, { useState, useEffect } from 'react';
//import './css/App.css';
import axios from 'axios';
import NASA_KEY from './config.js';
import Hero from './components/Hero/Hero.js';

const nasaAPI = 'https://api.nasa.gov/planetary/apod?api_key=' + NASA_KEY;
let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0');
let yyyy = today.getFullYear();
today = yyyy + '-' + mm + '-' + dd;

function App() {
  const [dateSelected, setDateSelected] = useState(today);
  const [imageOfDay, setImageOfDay] = useState([]);
  const [api, setApi] = useState(nasaAPI + '&date=' + dateSelected)

  const handleChange = event => {
    setDateSelected(event.target.value);
    console.log('handleChange', dateSelected);
    // setApi(nasaAPI + '&date=' + dateSelected);
  };
  const handleSubmit = event => {
    //event.preventDefault();
    setApi(nasaAPI + '&date=' + dateSelected);
    console.log('handleSubmit', api)
  };

  useEffect(() => {
    handleSubmit(dateSelected);
  }, [dateSelected]);


  useEffect(() => {
    axios.get(api)
      .then(response => {
        setImageOfDay(response.data);
        console.log('axios response: ', response)
      })
      .catch(error => {
        console.log('axios error: ', error);
      })
  }, [api])

  return (
    <div className='App'>
      {/* <Header /> */}
      <Hero imageOfDay={imageOfDay} dateSelected={dateSelected} handleSubmit={handleSubmit} handleChange={handleChange} />
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