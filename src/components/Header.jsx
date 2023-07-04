import React from "react";
import {MdOutlineArrowDropDownCircle} from "react-icons/md"
import { useSelector} from "react-redux";
import { Link } from "react-router-dom";
export default function Header({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const LoggedInLinks = [
    {
      name : "Home",
      to : "/"
    }
    , 
    {
      name : "Projects",
      to : "/posts"
    },
    {
      name : "Add",
      to : "/add"
    },
    {
      name : "Profile",
      to : "/profile"
    }
  ]

  const UnLoggedInLinks = [
    {
      name : "Home",
      to : "/"
    }
    , 
    {
      name : "Projects",
      to : "/posts"
    },
   {
    name : "Auth",
    to : "/auth"
   }
  ]

  const isLoggedIn = useSelector(state => state.isLoggedIn)
  return (
    
    <>
      <nav className=" sticky font-mono top-0 z-[2] flex flex-wrap items-center justify-between px-2 py-3 bg-[#FFFFF0]  shadow-md shadow-black text-black">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-xl  font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-black"
              href="/"
            >
              Project Vault
            </a>
            <button
              className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent  rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <MdOutlineArrowDropDownCircle />
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
            
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            
              {
                isLoggedIn ?
                <>
                {
                  LoggedInLinks.map(link =>(
                    <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-xl uppercase font-bold leading-snug text-black hover:opacity-75    "
                  to={link.to}

                ><span className="ml-2 ">{link.name}</span>
                  
                </Link>
              </li>
                  ))
                }
                </>
                :
                <>
                {
                  UnLoggedInLinks.map(link =>(
                    <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-xl uppercase font-bold leading-snug text-black hover:opacity-75    "
                  to={link.to}

                ><span className="ml-2 ">{link.name}</span>
                  
                </Link>
              </li>
                  ))
                }
                </>
              }
              {/* <li className="nav-item" >
                <Link
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                  to="/posts"
                >
                  <i className="fab fa-twitter text-lg leading-lg text-black opacity-75"></i><span className="ml-2">PROJECTS</span>
                </Link>
              </li>
              <li className="nav-item" key = '2'>
                <Link
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                  to="/auth"
                >
                  <i className="fab fa-pinterest text-lg leading-lg text-black opacity-75"></i><span className="ml-2">AUTH</span>
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}