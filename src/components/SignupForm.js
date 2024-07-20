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
  const [showconfirmPassword, setShowconfirmPassword] = useState(false);
  const [accountType, setAccountType] = useState("student");


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
  else {setIsLoggedIn(true);
    toast.success("Account Created");
    const accountData = {
        ...FormData
    };

    const finalData = {
        ...accountData,
        accountType
    }

    console.log("printing Final account data ");
    console.log(finalData);

    navigate("/Dashboard");

  }
  }

  return (
    <div
    className='flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max'>
      {/* student / instructor */}
      <div
        className='flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max'>

            <button
            className={`${accountType === "student" 
            ?
              "bg-richblack-900 text-richblack-5"
            :"bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
            onClick={()=> setAccountType("student")}>
                Student
            </button>

            <button
            className={`${accountType === "instructor" 
            ?
              "bg-richblack-900 text-richblack-5"
            :"bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
            onClick={() => setAccountType("instructor")}>
                Instructor
            </button>
        </div>

      <form
      onSubmit={submitHandler}>
       <div className='flex flex-col md:flex-row gap-4 mt-[20px]'>
                    <label className='w-full'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                            First Name<sup className='text-pink-200'>*</sup>
                        </p>
            <input
              required
              type="text"
              placeholder="First Name"
              name="firstName"
              value={FormData.firstName}
              onChange={changeHandler}
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] '
            ></input>
          </label>
          <label className='w-full'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Last Name<sup className='text-pink-200'>*</sup></p>
                        <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              value={FormData.lastName}
              onChange={changeHandler}
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] '
            ></input>

          </label>

        </div>
          <div className='mt-[20px]'>
            <label className='w-full mt-[20px]'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Email Address<sup className='text-pink-200'>*</sup></p>
                    
          <input
            required
            type="email"
            name="email"
            placeholder="Email Address"
            value={FormData.email}
            onChange={changeHandler}
            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
            >
          </input>
        </label>
        </div>

{/* create and confirmm password */}

     <div className='w-full flex flex-col md:flex-row gap-4 mt-[20px] '>
        <label  className='w-full relative'>
          <p 
          className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
            Create Password
            <sup className='text-pink-200'>*</sup></p>

          <input
            type={showPassword ?( 'text') : 'password'}
            required
            value={FormData.password}
            onChange={changeHandler}
            placeholder="Create password"
            name="password"
             className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
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

<label  className='w-full relative'>
          <p 
          className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
            Confirm Password
            <sup className='text-pink-200'>*</sup></p>
          <input
            type={showconfirmPassword ? 'text' : 'password'}
            required
            value={FormData.confirmpassword}
            onChange={changeHandler}
            placeholder="Confirm Password"
            name="confirmpassword"
             className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
          />
          <span
            className="absolute right-3 top-[38px] cursor-pointer"
            onClick={() => setShowconfirmPassword((prev) => !prev)}
          >
            {showconfirmPassword? (
              <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
            ) : (
              <AiOutlineEye fontSize={24} fill="#AFB2BF" />
            )}
          </span>
        </label>
        </div>

        <button className=' w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>
            Create Account
        </button>
      </form>
    </div>
  );
};
export default Signupform