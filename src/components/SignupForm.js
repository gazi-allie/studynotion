import React,{useState} from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import {toast} from "react-hot-toast"
import { useNavigate } from 'react-router-dom';


export const Signupform = ({setIsLoggedIn}) => {
  const navigate = useNavigate();
  const [FormData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmpassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }
  function submitHandler(event) {
    event.preventDefault();
    if(FormData.password !=FormData.confirmpassword){
      toast.error("confirm password do not match");
      return;
    }
    else{
      setIsLoggedIn(true);
      toast.success("caccount Ceated ")
      navigate('./Dashboard')
      const accountData= {
        ...FormData
      }
      

  
    }

  }

  return (
    <div>
      {/* student / instructor */}
      <div>
        <button>Student</button>
        <button>Instructure</button>
      </div>
      <form
      onSubmit={submitHandler}>
        <div>
          <label>
            <p>
              First Name <sup>*</sup>
            </p>
            <input
              required
              type="text"
              placeholder="First Name"
              name="firstName"
              value={FormData.firstName}
              onChange={changeHandler}
            ></input>
          </label>
          <label>
            <p>Last Name </p>
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              value={FormData.lastName}
              onChange={changeHandler}
            ></input>
          </label>
        </div>
        <label>
          <p>
            Enter Email Address <sup>*</sup>
          </p>
          <input
            required
            type="email"
            name="email"
            placeholder="Email Address"
            value={FormData.email}
            onChange={changeHandler}
          ></input>
        </label>
     <div>
        <label>
          <p>
            Password <sup>*</sup>
          </p>
          <input
            type={showPassword ? 'text' : 'password'}
            required
            value={FormData.password}
            onChange={changeHandler}
            placeholder="confirm  your password"
            name="password"
          />
          <span
            className="absolute right-3 top-[38px] cursor-pointer"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? (
              <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
            ) : (
              <AiOutlineEye fontSize={24} fill="#AFB2BF" />
            )}
          </span>
        </label>

        <label>
          <p>
            Confirm Password <sup>*</sup>
          </p>
          <input
            type={showPassword ? 'text' : 'password'}
            required
            value={FormData.confirmpassword}
            onChange={changeHandler}
            placeholder="Confirm your password"
            name="confirmpassword"
          />
          <span
            className="absolute right-3 top-[38px] cursor-pointer"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? (
              <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
            ) : (
              <AiOutlineEye fontSize={24} fill="#AFB2BF" />
            )}
          </span>
        </label>
        </div>

        <button type="submit">Create Account</button>
      </form>
    </div>
  );
};
export default Signupform