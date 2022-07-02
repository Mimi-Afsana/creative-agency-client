import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import UserAdmin from "./userAdmin";

const MakeAdmin = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch("http://localhost:5000/userss", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <p>loading....</p>;
  }

  return (
    <div>
      <h2 className="text-center">admin:{users.length}</h2>
      <div>
      {users.map((user, index) => (
        <UserAdmin
          key={user._id}
          index={index}
          user={user}
          refetch={refetch}
          isLoading={isLoading}
        ></UserAdmin>
      ))}
      </div>
    </div>
  );
};

export default MakeAdmin;
