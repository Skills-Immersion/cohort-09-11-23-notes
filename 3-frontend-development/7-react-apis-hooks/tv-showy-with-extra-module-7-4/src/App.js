import React, { useEffect, useState } from 'react';
import './App.css';
import Cast from './Cast'
import Show from './Show';

function App() {
  const [numClicks, setNumClicks] = useState(0);
  const [numMouseover, setNumMouseover] = useState(0);


  const [currentShow, setCurrentShow] = useState({});
  // set this up with the same datatype that we expect back from the API
  const [shows, setShows] = useState([])

  // write a useEffect to get the data from the api
  useEffect(() => {
    // make the request, transform the response data, and save the data into our state variable
    let abortController = new AbortController();
    fetch('https://api.tvmaze.com/shows',
      { signal: abortController.signal })
      .then(response => response.json())
      .then(data => setShows(data))
      .catch(e => {
        if (e.name !== 'AbortError') {
          throw e;
        }
      });
    return () => {
      console.log('we are running the cleanup function')
      abortController.abort()
    };
  }, [])
  // async/await useEffect code
  // useEffect(() => {
  //   async function loadTvShows() {
  //     const response = await fetch('https://api.tvmaze.com/shows');
  //     const data = await response.json();
  //     setShows(data);
  //   }
  //   loadTvShows();
  // }, []);
  // by default, this useEffect gets rerun every time a state variable updates
  // even though the state variable is not related at all
  // or, we can pass in an array of dependencies to change that
  useEffect(() => {
    // inside of this callback function, we can run side-effect-ful code
    document.title = `TV Showy${new Date().toTimeString()}`

    // return a cleanup function to set the document title to something else
    return () => document.title = 'goodbye';
  }, [numMouseover])
  return (
    <div className="container">
      <h1 onClick={() => setNumClicks(numClicks + 1)} onMouseOver={() => setNumMouseover(numMouseover + 1)}>TV Showy {numMouseover} {numClicks}</h1>
      <div className="main">
        <div className="shows">
          {shows.map(potato => <Show show={potato} key={potato.id} setCurrentShow={setCurrentShow} />)}
        </div>
        <div className="cast">
          {/* check if the current show exists (i.e. that we have clicked on something), and if we have, show the name of the show */}
          {currentShow.id && <Cast show={currentShow} />}
        </div>
      </div>
    </div>
  );
}

export default App;
