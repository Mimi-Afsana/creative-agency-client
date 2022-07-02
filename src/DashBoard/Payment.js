import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L3CyrDWtkJH8iSZofaV3dJnvEz6q8gLDUpERbTpyahobDSRRX5c7yi3jO45BS8rJNqWJnTu7SE1uzCxjGdGvPap00gwT42Hsc"
);

const Payment = () => {
  const { id } = useParams();
  const url = `http://localhost:5000/booking/${id}`;
  const { data: book, isLoading } = useQuery(["booking", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <p>loading.......</p>;
  }
  return (
    <div>
      <div class="card w-96 mt-16 mx-auto bg-base-100 shadow-xl">
        <div class="card-body">
          <p className="text-xl text-success font-bold">
            Hello, {book.userName}
          </p>
          <h2 class="card-title">Pay For: {book.serviceName}</h2>
          <p>Please Pay:$ {book.price}</p>
        </div>
      </div>

      <div class="card w-96 mt-16 mx-auto bg-base-100 shadow-2xl p-5">
        <Elements stripe={stripePromise}>
          <CheckoutForm book={book} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
