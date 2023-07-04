import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AddPost } from '../api-helpers/helper';
import {useSelector} from "react-redux"
import { updatePostById } from '../api-helpers/helper';
import cover from '../bgImage.png'
const AddPostForm = ({id, title,date,link, description, imageURL}) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const navigate = useNavigate()
    const isLoggedIn = useSelector(state => state.isLoggedIn)
    const _id = id
    const onSubmit = data => {
        let {title, description, imageURL, link, type, date}=  {...data}
        title = title.trim()
        description = description.trim()
        imageURL = imageURL.trim()
        link = link.trim()
        if(title.length < 10){
            toast("Title length too small")
            return;
        }
        else if(description.length < 20)
            {toast("Describe more")
            return}
        else if(link.length == 0)
           { toast("Enter a link")
            return}
        else if(date.length == 0)
            {
                toast("Enter date")
                return;
            }
         if(imageURL.length == 0){
            if(type == 'Frontend'){
                   imageURL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR46-JbzM0Nev4Iw2sn7OyORjZ0_36Jtz_oIfYEQ2TJ5CNjyLdI75krifncEjLaboOQJgI&usqp=CAU" 
            }
            else if(type == 'Backend'){
                    imageURL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpxNgsFnoxNmgKzqYi1wFeNCAoVvmTLm0J6aC_yZl1o6Qr-WtDMAqoKv_EjtcO2YaJ_Wo&usqp=CAU"
            }
            else if(type === 'Machine_Learning')
                imageURL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjkH7YW0FPUufysVLR-BSrkixQMngRwNlD1IkB-Qf9siP8kaeCuinoJowAIPTk0alNfqo&usqp=CAU"
            else if(type === 'Android_Development')
                imageURL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSauuVvAl2kO1XqLCXtamIcSeuSB9I1Oa17v_S0dME1LlzR63tQsDno55qcEJsWQAciBAA&usqp=CAU"
            }
            const user = localStorage.getItem("user")
            const post = {title, description, imageURL, link, date, type, user }
            if(!_id)
            AddPost(post).then(data => toast(data))
            else{
                console.log(post)
                toast("POST UPDATED SUCCESSFULLY")
                updatePostById(post, _id)
            }
    }
    useEffect(()=>{
       if(!isLoggedIn)
       navigate("/auth")
    },[])
  return (
    <div>
        
        <ToastContainer />
            <div className="flex flex-col pt-6 items-center min-h-screen pt-6 sm:justify-center sm:pt-3 bg-gray-50 "  style={{ backgroundImage: `url(${cover})` }}>
                <div>
                    <a href="/">
                        <h3 className="text-4xl font-bold text-purple-600">
                            {id ?
                        <>Edit Your Project</>    
                        :
                        <>Add your Project</>
                        }
                        </h3>
                    </a>
                </div>
                <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
                    <form method = "post" onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700 undefined"
                              
                           >
                                Title 
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    placeholder = {title}
                                    type="text"
                                    name="name"
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    {...register("title")}
                                    
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Brief Description
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                placeholder={description}
                                    type="text"
                                    name="email"
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    {...register("description")}
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Enter Image URL
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                placeholder = "Not Mandatory"
                                    type="text"
                                    name="text"
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    {...register("imageURL")}
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                               Link
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    placeholder = {link}
                                    type="text"
                                    name="text"
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    {...register("link")}
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                               Category
                            </label>
                            <div className="flex flex-col items-start">
                                <select
                                    type="password"
                                    name="password"
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    {...register("type")}
                                >
                                    <option value = "Frontend">Front End</option>
                                    <option value = "Backend">Back End</option>
                                    <option value = "Android_Development">Android Developement</option>
                                    <option value = "Machine_Learning">Machine Learning</option>
                                    <option value = "Blockchain">Blockchain</option>
                                </select>
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="password_confirmation"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Date
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    placeholder={date}
                                    type="date"
                                    name="password_confirmation"
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    {...register("date")}
                               />
                            </div>
                        </div>
                        <div className="flex items-center justify-center mt-4">
                            
                            
                            {
                                id ?
                                <button
                                type="submit"
                                className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false"
                            >
                                Edit
                            </button>
                            :
                            <button
                            type="submit"
                            className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false"
                        >
                            Add
                        </button>
                            }
                        </div>
                    </form>
                </div>
            </div>
        </div>
  )
}

export default AddPostForm