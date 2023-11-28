import React, { useState } from "react";
import Button from "./Button";

function Profile() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      {isLoggedIn === false && <p>is not logged in</p>}
      {isLoggedIn === true && <p>is logged in</p>}
      <Button setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />
    </>
  );
}

export default Profile;
