// step 1: import React
import React, { useState } from 'react';

// step 2: write the component/function
function Header() {
  // set up a state variable for numberOfClicks
  const [numberOfClicks, setNumberOfClicks] = useState(0);
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
    <h1 className="header" onClick={clickLogger}>Snacks! You've clicked {numberOfClicks} times.</h1>
  </header>
}

// step 3: export that function
export default Header;
