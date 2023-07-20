import React from "react";
import "./UserList.css";
import { useRef, useEffect } from "react";

const UserList = ({ title, imageUrl, users }) => {
  return (
    <div className="UserListContainer">
      <div className="imageContainer">
        <img src={imageUrl} alt="" />
      </div>
      <div className="BoxTitle">
        <h1>{title}</h1>
      </div>
      <div>
        {users.map((user, index) => (
          <div key={index} className="userBox">
            <p>
              <strong>Name:</strong> {user.firstName} {user.lastName}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
