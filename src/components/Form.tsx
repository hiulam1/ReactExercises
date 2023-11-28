import { useState } from "react";

function Form() {
  const [formattedString, setFormattedString] = useState({
    fname: "",
    lname: "",
    email: "",
  });

  const [text, setText] = useState("");

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleString = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormattedString({
      ...formattedString,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formattedString);
    setText(
      `first name: ${formattedString.fname} last name: ${formattedString.lname} email: ${formattedString.email}`
    );
    setIsSubmitted(true);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fname">First name:</label>
        <input
          type="text"
          name="fname"
          value={formattedString.fname}
          onChange={handleString}
          disabled={isSubmitted}
        />
        <label htmlFor="lname">Last name:</label>
        <input
          type="text"
          name="lname"
          value={formattedString.lname}
          onChange={handleString}
          disabled={isSubmitted}
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          value={formattedString.email}
          onChange={handleString}
          disabled={isSubmitted}
        />
        <input type="submit" value="Submit" />
      </form>
      <h1>{text}</h1>
    </>
  );
}

export default Form;
