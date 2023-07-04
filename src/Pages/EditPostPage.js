import React,{useEffect, useState} from 'react'
import { useParams , useNavigate} from 'react-router-dom'
import { getPostById } from '../api-helpers/helper'
import Header from '../components/Header'
import AddPostForm from '../components/AddPostForm'
import PostPageByType from './PostPageByType'

const EditPostPage = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    const [post, setpost] = useState({})
    useEffect(()=>{
        console.log(id)
       getPostById(id).then(data => {
        if(!data)navigate('/error')
        else{
            if(data.user != localStorage.getItem('user'))
            navigate('/error')

            setpost(data)
        }
           
       })
    }, [])
  return (
    <>
    <Header />
    {post && 
    <>
    <AddPostForm link = {post.link} title = {post.title} key = {post._id} id = {post._id} description = {post.description} imageURL = {post.imageURL} date = {new Date(post.date).toLocaleDateString} type = {post.type} />
    </>}
    </>
  )
}

export default EditPostPage