import React from "react";
import { toast } from "react-toastify";

const userAdmin = ({ user, refetch, index }) => {
  const { email, role } = user;
  const makeAdmin = () => {
    fetch(`http://localhost:5000/users/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("failed to make an admin");
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          toast.success("successfully made an admin");
        }
      });
  };
  return (
    <div className="mt-5">
      <input
        type="text"
        placeholder="Type here"
        class="input input-bordered input-sm w-full max-w-xs"
        value={email}
      />
      <button class="btn btn-sm ml-4">Remove User</button>

      {role !== "admin" && (
        <button onClick={makeAdmin} class="btn btn-sm ml-4">
          Make Admin
        </button>
      )}
    </div>
  );
};

export default userAdmin;
