import React, { useEffect, useState } from 'react';
import './App.css';
import Show from './Show';

function App() {
  const [numClicks, setNumClicks] = useState(0);
  const [numMouseover, setNumMouseover] = useState(0);

  // set this up with the same datatype that we expect back from the API
  const [shows, setShows] = useState([])

  // write a useEffect to get the data from the api
  // useEffect(() => {
  //   // make the request, transform the response data, and save the data into our state variable
  //   fetch('https://api.tvmaze.com/shows')
  //     .then(response => response.json())
  //     .then(data => setShows(data));
  // }, [])
  // async/await useEffect code
  useEffect(() => {
    async function loadTvShows() {
      const response = await fetch('https://api.tvmaze.com/shows');
      const data = await response.json();
      setShows(data);
    }
    loadTvShows();
  }, []);
  // by default, this useEffect gets rerun every time a state variable updates
  // even though the state variable is not related at all
  // or, we can pass in an array of dependencies to change that
  useEffect(() => {
    // inside of this callback function, we can run side-effect-ful code
    document.title = `TV Showy${new Date().toTimeString()}`
  }, [numMouseover])
  return (
    <div className="container">
      <h1 onClick={() => setNumClicks(numClicks + 1)} onMouseOver={() => setNumMouseover(numMouseover + 1)}>TV Showy {numMouseover} {numClicks}</h1>
      <ul>

        {shows.map(potato => <Show show={potato} key={potato.id} />)}
      </ul>
    </div>
  );
}

export default App;
