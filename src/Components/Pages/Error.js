import React from "react";
import { MdError } from "react-icons/md";
const Error = () => {
  return (
    <div className="error-page">
      <MdError className="error-icon" />
      <div className="error">
        <h1>You entered wrong url for search</h1>
      </div>
    </div>
  );
};

export default Error;
