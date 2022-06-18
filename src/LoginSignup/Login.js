import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import auth from "../firebase.init";
import useToken from "../hooks/useToken";

const Login = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  const [token] = useToken(user);
  if (token) {
    navigate("/home");
  }

 
  // if (user) {
  //   navigate("/home");
  // }
  if (loading) {
    return <p>loading ...</p>;
  }
  return (
    <div className="justify-center max-w-xl mx-auto lg:mt-10">
      <img
        src="https://i.ibb.co/J7m9bxG/logo.png"
        alt=""
        className="w-20 lg:ml-60 mb-5"
      />
      <div className="pb-64 justify-center max-w-xl mx-auto border">
        <h4 className="lg:mt-32 text-2xl font-bold lg:ml-56">Login With</h4>
        <div>
          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-outline lg:ml-36 lg:mt-5  lg:pr-16 rounded-full"
          >
            <img
              src="https://i.ibb.co/qyg9FWP/google-2.png"
              alt=""
              className="lg:mr-16"
            />
            Google Sign In
          </button>
        </div>
        <p className="mt-5 lg:ml-48">
          <small>
            If user is new?{" "}
            <Link className="text-cyan-600" to="/signup">
              Please Create New Account
            </Link>
          </small>
        </p>
      </div>
    </div>
  );
};

export default Login;
