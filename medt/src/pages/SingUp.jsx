import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const SignUp = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    fullName: "",
    gender: "",
    birthDate: "",
    email: "",
    phoneNumber: "",
    password: "",
  });
  // const [fileName, setFileName] = useState("");
  // const onChangeFile = (e) => {
  //   setFileName(e.target.files[0]);
  // };
  const onChange = (e) => {
    setValues((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const formData = new FormData();
  formData.append("fullName", values.fullName);
  formData.append("gender", values.gender);
  // formData.append("birthDate", values.birthDate);
  formData.append("email", values.email);
  formData.append("phoneNumber", values.phoneNumber);
  formData.append("password", values.password);

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5001/app/signup", formData, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        navigate("/login", { replace: true });
        //   .then((Response) => {
        //     console.log(Response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Navbar />
      <div className="signup">
        <form
          className="form"
          method="POST"
          onSubmit={submitHandler}
          encType="multipart/form-data"
          action=""
        >
          <h1>Inscrivez-vous à Meditide</h1>
          <div className="form-group">
            <input
              onChange={onChange}
              type="text"
              name="fullName"
              id="fullName"
              placeholder="full name"
              required
            />
            <div className="flex items-center">
              <label htmlFor="gender">Gender</label>
              <select
                className="ml-4"
                name="gender"
                onChange={onChange}
                id="gender"
                form="genderform"
              >
                <option value="other" placeholder="Gender"></option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <input
              onChange={onChange}
              type="date"
              name="birthdate"
              id="birthdate"
              required
            />
            <input
              onChange={onChange}
              type="email"
              name="email"
              id="email"
              autoComplete="email"
              required
              placeholder="email address"
            />
            <input
              onChange={onChange}
              name="phoneNumber"
              id="phoneNumber"
              type="number"
              placeholder="Phone Number"
              required
            />
            <input
              onChange={onChange}
              type="password"
              name="password"
              id="password"
              placeholder="password"
              required
            />
          </div>
          <button type="submit">Create Account</button>
          <Link className="form-link" to="/login">
            SignIn
          </Link>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default SignUp;
