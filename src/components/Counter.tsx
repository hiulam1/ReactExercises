import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    const value = (event.target as HTMLButtonElement).value;
    if (value === "+") {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }
  }

  return (
    <>
      <h1>
        Counter
        <br />
        <br />
        {count}
        <br />
        <button value={"+"} onClick={handleClick}>
          +
        </button>
        <button value={"-"} onClick={handleClick}>
          -
        </button>
      </h1>
    </>
  );
}

export default Counter;
