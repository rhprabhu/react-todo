import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  //   const [email, setEmail] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
    console.log(e.target.value);
  };
  //   const handleEmailChange = (e) => {
  //     setEmail(e.target.value);
  //     console.log(e.target.value);
  //   };
  const handleSubmit = (e) => {
    let users = [];
    e.preventDefault();
    users = [{ name: name }];
    console.log(users);
    // setEmail("");
    setName("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={handleNameChange}></input>
        {/* <input type="text" value={email} onChange={handleEmailChange}></input> */}
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default App;
