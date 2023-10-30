import React, { useEffect, useState } from 'react';
import CastMember from './CastMember';

function Cast({ show }) {
  // fetch the cast information for that show
  // save the cast information in a state variable
  // render the cast information onto the page
  const [cast, setCast] = useState([])
  useEffect(() => {
    setCast([]);
    fetch(`https://api.tvmaze.com/shows/${show.id}/cast`)
      .then(response => response.json())
      .then(castData => setCast(castData))
  }, [show.id])
  return <div>
    cast for the show {show.name}
    {cast.map(castMember => <CastMember castMember={castMember} />)}
  </div>
}

export default Cast;