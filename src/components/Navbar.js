import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/Logo.svg";
import { toast } from 'react-hot-toast';


export const Navbar = (props) => {
  let isLoggedIn=props.isLoggedIn;
  let setIsLoggedIn=props.setIsLoggedIn;

  return (
    <div  className='flex flex-col md:flex-row gap-8 justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto'>

    <Link to="/"> 
        <img src={logo} alt="Logo" width={160} height={32} loading="lazy"/>
    </Link>

            <nav>
                <ul className='text-richblack-100 flex gap-x-6 al'>
                    <li> <Link to="/">Home</Link></li>
                    <li> <Link to="/">About</Link></li>
                    <li> <Link to="/">Contact</Link></li>


                </ul>
            </nav>
             <div className=' flex items-center gap-x-4'>

              {!isLoggedIn &&
                <Link to="/Login"> 
                 <button className='bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'>
                        Log in
                    </button>
                </Link>
              }
              {!isLoggedIn &&
                <Link to="/Signup"> 

               <button  className='bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'>
                        Sign up
                    </button>
                </Link>
              }
              {isLoggedIn &&
                <Link to="/Logout"> 
                <button onClick={()=>{
                  setIsLoggedIn(false);
                  toast.success("Logged out")

                }} className='bg-richblack-800 text-richblack-100 py-[8px] 
                px-[12px] rounded-[8px] border border-richblack-700'> 
                 Log Out </button>  </Link>
              }
              {isLoggedIn &&
                <Link to="/Dashboard"> 
                <button className='bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'>
                        Dashboard</button> 
                         </Link>
              }
             </div>
       
      
    </div>
  );
};

export default Navbar;
