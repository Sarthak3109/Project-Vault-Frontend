import {AiFillEdit, AiFillDelete} from "react-icons/ai";

import React, {useEffect, useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {DeletePostById, getUserById} from "../api-helpers/helper";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
const ProjectCard = ({
    href,
    user,
    title,
    desc,
    image,
    date,
    link,
    id,size,setsize
}) => {
    const [User, setUser] = useState()
    const [Delete, setDelete] = useState(false)
    const navigate = useNavigate()
    useEffect(() => {
        getUserById(user).then(data => {
            setUser(data)
        })
        console.log(href)
    }, [])
    const LoggedInUser = localStorage.getItem("user")
    return (
        <div className="w-[400px] mt-[30px] mb-2 sm:mt-[2px] lg:w-[400px] rounded-lg shadow-md  hover:translate-y-1">
            
        {/* <ToastContainer /> */}
                <>
                <div className='flex justify-between items-center my-2 px-5'>
                <div className='font-bold flex flex-col'>

                    <div>{
                        User && <>{
                            User.name
                        }</>
                    }</div>
                    <div>{date}</div>
                </div>
             {  LoggedInUser === User?._id && <div className="flex justify-center items-center gap-4">
                <AiFillEdit className='cursor-pointer text-[red]' onClick={()=>{navigate(`/posts/edit/${id}`)}} /><AiFillDelete 
             onClick = {()=>{setsize(size-1); DeletePostById(id).then(()=>toast("POST DELETED SUCCESSFULLY, REFRESH TO SEE CHANGES"))}}
             className="cursor-pointer text-[red]"/></div>}

            </div>
                <div className=" flex justify-center items-center">
            <img className="object-cover  sm:h-70 md:h-48"
                src={image}
                alt={title}/>
                </div>
            <div className="p-4">
                <h4 className="text-xl font-semibold tracking-tight text-blue-600">
                    {title} </h4>
                <p className="mb-2 leading-normal">
                    {desc} </p>

            </div>
            <div className="flex justify-center items-center">
                {
                link && <>
                    <a href={link}>
                        <div class="px-5 py-2.5  relative rounded group overflow-hidden font-medium bg-purple-50 text-purple-600 inline-block">
                            <span class="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-purple-600 group-hover:h-full opacity-90"></span>
                            <span class="relative group-hover:text-white">EXPLORE</span>
                        </div>
                    </a>
                </>
            } </div>
                </>
        

        </div>
    )
}

export default ProjectCard
