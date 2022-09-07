import React from "react";
import "./FormInput.css";

const FormInput = (props) => {
  return (
    <div className="FormInput">
      {/* <label>Username</label> */}
      <input name={props.name} placeholder={props.placeholder}></input>
    </div>
  );
};

export default FormInput;
