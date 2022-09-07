import React, { useState } from "react";
import FormInput from "./components/FormInput";

function App() {
  // const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    //---------display in console if it renders
    // const data = new FormData(e.target);
    // console.log(Object.fromEntries(data.entries()));
  };
  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <FormInput name="username" placeholder="Username" />
        <FormInput name="email" placeholder="Email" />
        <FormInput name="fullname" placeholder="Full Name" />
        <FormInput name="sth" placeholder="sth else" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
