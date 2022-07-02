import React, { useEffect, useState } from "react";
import AllService from "./AllService";

const AllServiceListAdmin = () => {
  const [book, setBook] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/booking").then((res) =>
      res.json().then((data) => setBook(data))
    );
  }, []);
  return (
    <div class="overflow-x-auto">
      <table class="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>Service</th>
            <th>Project Details</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {book.map((booked, index) => (
            <AllService
              key={booked._id}
              index={index}
              booked={booked}
            ></AllService>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllServiceListAdmin;
