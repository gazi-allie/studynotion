import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { ToastBar,toast } from 'react-hot-toast';
   
export function LoginForm({ setIsLoggedIn }) {
    const navigate = useNavigate();
    const [FormData, setFormData] = useState(
        { email: "", password: "" }
    );
    const [showPassword, setShowPassword] = useState(false);
    function changeHandler(event) {
        setFormData((prevData) => (
            {
                ...prevData,
                [event.target.name]: event.target.value
            }
        )
        );
    }


    function submitHandler(event) {
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Login successful");
        navigate("/Dashboard");


    }
    return (
        <form onSubmit={submitHandler}
            className="flex flex-col w-full gap-y-4 mt-6">
            <label>
                <p>
                    Email Address <sup>*</sup>

                </p>
                <input type="email" required
                    value={FormData.email}
                    onChange={changeHandler}
                    placeholder='Enter your email address'
                    name='email' />
            </label>

            <label>
                <p>
                    Password <sup>*</sup>

                </p>
                <input type={showPassword ? ("text") : ("password")}
                    required
                    value={FormData.password}
                    onChange={changeHandler}
                    placeholder='Enter your password'
                    name='password' />
                <span
                    className='absolute right-3 top-[38px] cursor-pointer'
                    onClick={() => setShowPassword((prev) => !prev)}>
                    {showPassword ?

                        (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />) :

                        (<AiOutlineEye fontSize={24} fill='#AFB2BF' />)}
                </span>
                <Link to='#'>
                    <p>
                        Forgot Password </p>
                </Link>
            </label>

            <button type='submit'>Sign In</button>

        </form>
    );
}
export default LoginForm
