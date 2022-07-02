import React from "react";

const AllService = ({ index, booked }) => {
  const { userName, email, serviceName, description } = booked;
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{userName}</td>
      <td>{email}</td>
      <td>{serviceName}</td>
      <td>{description}</td>
    </tr>
  );
};

export default AllService;
