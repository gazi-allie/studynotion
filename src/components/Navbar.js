import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/Logo.svg";
import { toast } from 'react-hot-toast';


export const Navbar = (props) => {
  let isLoggedIn=props.isLoggedIn;
  let setIsLoggedIn=props.setIsLoggedIn;

  return (
    <div className='flex justify-evenly backdrop-brightness-90'>
       
          <Link to="/">
              <img src={logo} height={32} width={160} loading="lazy" />
            </Link>

            <nav>
                <ul className='text-richblack-100 flex gap-x-6 al'>
                    <li> <Link to="/">Home</Link></li>
                    <li> <Link to="/">About</Link></li>
                    <li> <Link to="/">Contact</Link></li>


                </ul>
            </nav>
             <div className=' flex ml-4 gap-x-6 al'>

              {!isLoggedIn &&
                <Link to="/Login"> 
                <button> Login </button>  </Link>
              }
              {!isLoggedIn &&
                <Link to="/Signup"> 
                <button onClick={()=>{
                  setIsLoggedIn(false);
                  // toast.success("Logged out")

                }}> Signup </button>  </Link>
              }
              {isLoggedIn &&
                <Link to="/Logout"> 
                <button onClick={()=>{
                  setIsLoggedIn(false);
                  toast.success("Logged out")

                }}> 
                 Log Out </button>  </Link>
              }
              {isLoggedIn &&
                <Link to="/Dashboard"> 
                <button> Dashboard </button>  </Link>
              }
             </div>
       
      
    </div>
  );
};

export default Navbar;
