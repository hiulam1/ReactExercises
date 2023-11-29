import React, { useState } from "react";
/*
Creating a counter whereby everytime the button is clicked, the counter goes up by 2.
However, only 1 event handler function and two calls to the setState function (each makes count go up by 1) can be used
*/
function Counter2() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount((count) => count + 1);
    setCount((count) => count + 1);
  }

  return (
    <>
      <h1>
        Count:{count}
        <br />
        <button onClick={handleClick}>+</button>
      </h1>
    </>
  );
}

export default Counter2;
