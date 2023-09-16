import React from "react";
import { FaUserPlus } from "react-icons/fa";
import "./AddUser.css";

const AddUser = () => {
  return (
    <div className="component">
      <FaUserPlus size={30} />
      <h5>Add New User</h5>
      {/* <br /> */}
    </div>
  );
};

export default AddUser;
