import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { getUserById } from '../api-helpers/helper'
import { useNavigate, useParams } from 'react-router-dom'
import UserPosts from '../components/UserPosts'
import { authActions } from '../store'
import cover from '../bgImage.png'
const Profile = () => {
    const navigate = useNavigate()
    const isLoggedIn = useSelector(state => state.isLoggedIn)
    const id = localStorage.getItem('user')
    const [user, setuser] = useState()
    const dispatch = useDispatch()
    useEffect(()=>{
        if(!isLoggedIn)return
        const getUserDetails = async()=>{
        await getUserById(id).then(data => {setuser(data)})
        }
        getUserDetails()
    },[isLoggedIn])
    console.log(isLoggedIn)
  return (
    <div className = 'min-h-[100vh]'style={{ backgroundImage: `url(${cover})` }}>
    <Header />
    {isLoggedIn && 
    
    <>
    <div>
    <div className='flex justify-between items-center pt-3 mx-4 ' >
    <div className='text-2xl sm:text-3xl md:text-4xl'> {user?.name}</div>
    <div
          onClick={e=>{dispatch(authActions.logout()); navigate('/')}}
          class="rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-indigo-600 text-indigo-600 text-white"
        >
          <span class="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-indigo-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
          <span class="relative text-indigo-600 transition duration-300 group-hover:text-white ease">
            LOGOUT
          </span>
        </div>


    </div>

    <UserPosts posts = {user?.posts}/>
    </div>
    </>
    }
    </div>
  )
}

export default Profile