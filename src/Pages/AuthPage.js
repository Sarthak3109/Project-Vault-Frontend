import React,{useState} from 'react'
import Header from '../components/Header'
import { Link,useNavigate} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import cover from '../bgImage.png'

import {AiOutlineArrowDown} from "react-icons/ai";
import { Login,SignIn } from '../api-helpers/helper';
import { useDispatch } from 'react-redux';
import { authActions } from '../store';
const AuthPage = () => {
  const dispatch = useDispatch()
  const [LoginPage , setLoginPage] = useState(true)
  const [inputs, setinputs] = useState({name :  "" , email: "", password : "", confirm_password : ""})
  const Navigate = useNavigate()
  const handleLogin = ()=>{

    if(LoginPage){
      const {email, password} = {...inputs}
      const credentials = {email, password};
      Login(credentials).then(data => {
        toast(data)
        if(data == 'Login Successfull')
      {dispatch(authActions.login())
        Navigate("/posts")
      }
      })


    }
    else{
      setinputs(prev=>(
        {
          name : "",
          password : "",
          confirm_password : "",
          email : ""
        }
      ))
      setLoginPage(true)
    }
  }

  const handleSignIn = ()=>{

    if(!LoginPage){
    
      // if(inputs.passw)
      SignIn(inputs).then(data => {
        toast(data)
        if(data == 'Account Successfully Created')
        {
          dispatch(authActions.login())
          Navigate("/posts")}
      })

    }
    else
      {setLoginPage(false)
      setinputs(prev=>(
        {
          name : "",
          password : "",
          confirm_password : "",
          email : ""
        }
      ))
      }
  }
  const handleChange = (e)=>{
    // console.log(e.target.name)
    setinputs(prev => ({...prev, [e.target.name] : e.target.value}))
  }
  return (
    <>
    <Header />
    <section className="h-screen">
      <ToastContainer />
  <div className="container h-full px-6 py-24 " style = {{backgroundImage :  `url(${cover})`}}>
    <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
      {/* Left column container with background*/}
      <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
        <img
          src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
          className="w-full"
          alt="Phone image"
        />
      </div>
      {/* Right column container with form */}
      <div className="md:w-8/12 lg:ml-6 lg:w-5/12 flex flex-col items-center justify-center">
        <form  >
          {/* Email input */}
          <div className='mb-6 font-serif text-center tracking-wide text-2xl flex justify-center items-center gap-3'>
       
          {
            LoginPage ?
            <>
              
              <div>LOGIN HERE </div><AiOutlineArrowDown />
            </>
            :
            <>
             <div>SIGN IN  HERE </div><AiOutlineArrowDown />
            </>
          }
          </div>


          {/* USERNAME */}
          {
            !LoginPage &&
            <div className="relative mb-6 border-2 border-sky-500 " >
            <input
              type="text"
              className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 "
             
              placeholder="Name"
              value = {inputs.name}
              name = "name"
              onChange = {e => handleChange(e)}
            />
          
            {/* <label
              htmlFor="exampleFormControlInput3"
              className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] dark:text-neutral-200 dark:peer-focus:text-primary duration-200 ease-out leading-[2.15] text-neutral-500 transition-all   peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
            >
              Name
            </label> */}
          </div>
          }
          {/* EMAIL ADDRESS */}
          <div className="relative mb-6 border-2 border-sky-500 " data-te-input-wrapper-init="">
            <input
              type="text"
              className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 "
              placeholder="Email address"
              name = "email"
              onChange = {e => handleChange(e)}

              value = {inputs.email}
            />
          
          </div>
          {/* Password input */}
          <div className="relative mb-6 border-2 border-sky-500" data-te-input-wrapper-init="">
            <input
              type="password"
              className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 "
              placeholder="Password"
              onChange = {e => handleChange(e)}

              name = "password"
              value = {inputs.password}
            />
           
          </div>

          {/* CONFIRM PASSWORD */}
          {
            !LoginPage && 
            <div className="relative mb-6 border-2 border-sky-500" data-te-input-wrapper-init="">
            <input
              type="password"
              className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 "
              placeholder="Confirm Password"
              onChange = {e => handleChange(e)}

              name = "confirm_password"
              value = {inputs.confirm_password}
            />
          
          </div>
          }


        
          <Link
          to="/auth"
          class="px-5  py-2.5  text-center relative rounded group overflow-hidden border-2 border-sky-500 font-medium bg-purple-50 text-purple-600 mb-3 block w-[400px]"
          onClick = {handleLogin}
        >
          <span class="absolute top-0 left-0 flex w-full  h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-purple-600 group-hover:h-full opacity-90"></span>
          <button  class="relative group-hover:text-white">LOGIN</button>
        </Link>
        <Link
          to="/auth"
          class="px-5 py-2.5  text-center relative rounded group overflow-hidden border-2 border-sky-500 font-medium bg-purple-50 text-purple-600   block w-[400px]"
          onClick = {handleSignIn}
        >
          <span class="absolute top-0 left-0 flex w-full  h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-purple-600 group-hover:h-full opacity-90"></span>
          <button  class="relative group-hover:text-white">SIGN IN</button>
        </Link>
        
         
        </form>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default AuthPage