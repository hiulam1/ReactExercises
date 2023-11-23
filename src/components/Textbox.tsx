import { useState } from "react";

function Textbox() {
  const [text, setText] = useState("");
  function handleChange(value: string) {
    setText(value);
  }
  return (
    <>
      <h1>{text}</h1>
      <input
        type="text"
        onKeyUp={(e) => handleChange((e.target as HTMLInputElement).value)}
      />
    </>
  );
}

export default Textbox;
