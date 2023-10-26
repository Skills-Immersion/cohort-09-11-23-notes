// step 1: import React
import React, { useState } from 'react';

// step 2: write the component/function
function Header({ numberOfClicks, setNumberOfClicks }) {
  // state variable has the job of keeping track of what the user has typed in to the input at any given time
  const [username, setUsername] = useState('')

  // let numberOfClicks = 0;
  const clickLogger = function () {
    // numberOfClicks = numberOfClicks + 1;
    setNumberOfClicks(numberOfClicks + 1);
  };
  return <header>
    {/* event listeners require 3 things
    1. Which element are you listening on?
    2. What event are you listening for on that element?
    3. What should we do (callback function) when that event happens? */}
    <h1 className="header" onClick={clickLogger}>Snacks!
    </h1>
    <label htmlFor='username'>Enter your name</label>
    {/* this input will change the state variable every time the user types something */}
    <input
      type="text"
      id="username"
      name="username"
      onChange={(event) => setUsername(event.target.value)}
      value={username}
    />
    <button onClick={() => setUsername('')}>Reset username</button>
    {/* this h2 will show up if the user has typed in a name to welcome them */}
    {username.length > 0 && <h2>Welcome, {username}</h2>}
  </header>
}

// step 3: export that function
export default Header;
