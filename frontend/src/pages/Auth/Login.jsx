import React, { useState } from "react";
// import AuthLayout from "../../layouts/AuthLayout";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/Inputs/Input";
import { validateEmail } from "../../utils/helpers";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const handleLoginFormSubmit = async (event) => {
    event.preventDefault();
    if(!email) {
      setError("Email can't be empty");
    } else if(!validateEmail(email)) {
      setError("Enter a valid email address");
    } else if(!password) {
      setError("Password can't be empty");
    } else if(password.length < 7) {
      setError("Password must be at least 7 characters long");
    } else {
      setError("");
    }

    // Login API call
  };
  return (
    // <AuthLayout>
      <div className="lg:w-[70%] h-3/4 md:h-full flex flex-col justify-center">
        <h3 className="text-xl font-semibold text-black">Welcome Back</h3>
        <p className="text-xs text-slate-700 mt-[5px] mb-6">
          Please enter your details to Login
        </p>
        <form onSubmit={handleLoginFormSubmit}>
          <Input
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            label="Email Address"
            placeholder="yourmail@example.in"
            type="text"
          />
          <Input
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            label="Password"
            placeholder="Min. 7 characters"
            type="password"
          />
          { error && 
            <p className="text-red-500 text-xs pb-2.5"> { error } </p>
          }
          <button type="submit" className="btn-primary">
            Login
          </button>
          <p className="text-[13px] text-slate-800 mt-3 ">
            Don't have an account?{" "}
            <Link className="font-medium text-primary underline" to="/register">Register</Link>
          </p>
        </form>
      </div>
    // </AuthLayout>
  );
};

export default Login;
