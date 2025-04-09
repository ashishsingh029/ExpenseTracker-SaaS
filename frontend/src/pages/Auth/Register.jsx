import React, { useState } from "react";
import Input from "../../components/Inputs/Input";
import { validateEmail } from "../../utils/helpers";
import ProfilePhotoSelector from "../../components/Inputs/ProfilePhotoSelector";
import { Link } from "react-router-dom";

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [profilePic, setProfilePic] = useState(null)
  const [error, setError] = useState("");
  const handleRegisterFormSubmit = async (event) => {
    event.preventDefault();
    if (!fullName) {
      setError("Name can't be empty");
    } else if (!email) {
      setError("Email can't be empty");
    } else if (!validateEmail(email)) {
      setError("Enter a valid email address");
    } else if (!password) {
      setError("Password can't be empty");
    } else if (password.length < 7) {
      setError("Password must be at least 7 characters long");
    } else if (password !== confirmPassword) {
      setError("Password and Cofirm password do not match");
    } else {
      setError("");
    }

    // Signup api call
  };
  return (
    <div className="lg-w[100%] h-auto md:h-full mt-10 md:mt-0 flex flex-col justify-center">
      <h3 className="text-xl font-semibold text-black">Create an Account</h3>
      <p className="text-xs text-slate-700 mt-[5px] mb-6">
        Join us today by entering your details below.
      </p>
      <form onSubmit={handleRegisterFormSubmit}>
        <ProfilePhotoSelector image={profilePic} setImage={setProfilePic} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            value={fullName}
            onChange={({ target }) => setFullName(target.value)}
            label="Full Name"
            placeholder="Enter name"
            type="text"
          />
          <Input
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            label="Email Address"
            placeholder="youremail@example.in"
            type="text"
          />
          <Input
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            label="Password"
            placeholder="Min. 7 characters"
            type="password"
          />
          <Input
            value={confirmPassword}
            onChange={({ target }) => setConfirmPassword(target.value)}
            label="Confirm Password"
            placeholder="enter password again"
            type="password"
          />
        </div>

        {error && <p className="text-red-500 text-xs pb-2.5"> {error} </p>}
        <button type="submit" className="btn-primary">
          Register
        </button>
        <p className="text-[13px] text-slate-800 mt-3 ">
          Already have an account?{" "}
          <Link className="font-medium text-primary underline" to="/login">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
Register;
