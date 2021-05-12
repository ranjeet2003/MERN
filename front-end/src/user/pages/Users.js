import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Ranjeet",
      image:
        "https://png.pngtree.com/png-clipart/20190520/original/pngtree-vector-users-icon-png-image_4144740.jpg",
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
