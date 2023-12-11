// toggling log in and log off
type ButtonProps = {
  setIsLoggedIn: (value: boolean) => void;
  isLoggedIn: boolean;
};

function Button({ setIsLoggedIn, isLoggedIn }: ButtonProps) {
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
