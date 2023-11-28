import React from "react";

type ButtonProps = {
  setIsLoggedIn: (value: boolean) => void;
  isLoggedIn: boolean;
};

function Button({ setIsLoggedIn, isLoggedIn }) {
  function handleClick() {
    if (isLoggedIn === false) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }
  return <button onClick={handleClick}>Click me</button>;
}

export default Button;
