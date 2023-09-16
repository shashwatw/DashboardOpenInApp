import React from "react";
import "./NewUser.css";

const NewUser = ({ userInfo }) => {
  return (
    <div className="component">
      <h4 style={{ textAlign: "left"}}>{userInfo.name}</h4>
      <div
        className="infocontainer"
      >
        <div className="email">
          <p>{userInfo.email}</p>
        </div>
        <div
         className="links"
        >
          <p>{userInfo.facebook}</p>
          <p>{userInfo.twitter}</p>
          <p>{userInfo.linkedin}</p>
        </div>
      </div>
    </div>
  );
};

export default NewUser;
