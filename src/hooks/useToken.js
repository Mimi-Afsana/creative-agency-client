import React, { useEffect, useState } from "react";

const useToken = (user) => {
  console.log(user);
  const [token, setToken] = useState("");
  useEffect(() => {
    const email = user?.user?.email;
    const currentUser = { email: email };
    console.log(email);

    if (email) {
      fetch(`http://localhost:5000/users/${email}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(currentUser),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("data", data);
          const accessToken = data.token;
          console.log(accessToken);
          localStorage.setItem("accessToken", accessToken);
          setToken(accessToken);
        });
    }
  }, [user]);
  return [token];
};

export default useToken;
