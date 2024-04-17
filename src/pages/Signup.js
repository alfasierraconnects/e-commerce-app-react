import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Appwrite/AuthContext";

const Signup = () => {
  const navigate = useNavigate();
  const { signupUser } = useAuth();
  const signupValues = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = signupValues.current.email.value;
    const password = signupValues.current.password.value;

    const userInfo = { email, password };
    signupUser(userInfo);
  };

  return (
    <div className="flex justify-center items-center">
      <form
        className="bg-white shadow-2xl rounded-md p-6 w-96"
        onSubmit={handleSubmit}
        ref={signupValues}
      >
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-xl">Sign Up</h3>
          <button onClick={() => navigate("/")}>
            <p className="text-3xl hover:text-fuchsia-700">
              <ion-icon name="close-outline"></ion-icon>
            </p>
          </button>
        </div>

        <div className="flex flex-col gap-6 mt-6 mx-1">
          <div className="flex items-center">
            <p className="text-2xl text-gray-700 p-1">
              <ion-icon name="person-outline"></ion-icon>
            </p>
            <input
              className="flex-1 p-2 border-2 rounded-md outline-none focus:border-fuchsia-600"
              type="text"
              placeholder="Your Name"
              required
            />
          </div>

          <div className="flex items-center">
            <p className="text-2xl text-gray-700 p-1">
              <ion-icon name="mail-outline"></ion-icon>
            </p>
            <input
              name="email"
              className="flex-1 p-2 border-2 rounded-md outline-none focus:border-fuchsia-600"
              type="email"
              placeholder="Your Email"
              required
            />
          </div>

          <div className="flex items-center">
            <p className="text-2xl text-gray-700 p-1">
              <ion-icon name="key-outline"></ion-icon>
            </p>
            <input
              name="password"
              className="flex-1 p-2 border-2 rounded-md outline-none focus:border-fuchsia-600"
              type="password"
              placeholder="Password"
              required
            />
          </div>
          <div className="flex items-baseline gap-2">
            <input
              type="checkbox"
              required
              className="h-3 w-3 cursor-pointer"
            />
            <p className="text-gray-700 flex-1">
              By continuing, I agree to the terms of use and privacy policy.
            </p>
          </div>

          <button
            type="submit"
            className=" bg-fuchsia-800 text-white px-4 py-2 rounded-full hover:bg-fuchsia-700 hover:shadow-sm active:font-semibold"
          >
            Create Account
          </button>
        </div>

        <p className="mt-6 text-center text-gray-600 hover:text-fuchsia-700 hover:font-semibold cursor-pointer">
          Already have an account?
        </p>
      </form>
    </div>
  );
};

export default Signup;
