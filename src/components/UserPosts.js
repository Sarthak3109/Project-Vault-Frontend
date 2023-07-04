import React,{useEffect,useState} from 'react'
import ProjectCard from '../components/ProjectCard'
import { ToastContainer } from 'react-toastify'
import { getPostByUserPosts } from '../api-helpers/helper'
import UserZeroPost from './UserZeroPost'
import cover from '../bgImage.png'
import Loader from './Loader'
const UserPosts = ({posts}) => {
    const [Posts, setPosts] = useState([])
    const [loading, setloading] = useState(true)
    useEffect(()=>{
        
       if(posts)
       {
        console.log("hi2")
        getPostByUserPosts(posts).then(data => {setPosts(data); setloading(false)})}
       
    },[posts])
    return (<>
    {   loading ? <Loader /> :
        Posts.length > 0
        ?
        <>
        <div className='min-h-[89vh]' >
        <div className='text-center pt-6 text-xl md:text-3xl text-bold '  >MY POSTS</div>
        <div className='flex flex-wrap justify-center items-center lg:gap-[50px] mt-4'>
 
        
        {
             Posts.map((post, idx)=>(
               
                
                <ProjectCard id = {post._id} link = {post.link} user = {post.user} key={idx} date = {new Date(`${post.date}`).toLocaleDateString()} image={post.imageURL} title={post.title} desc={post.description} href={`/posts/${post.type}`}/>
                
                
                ))
                
        }
        
        </div>
        </div>
        </>
        :
        <>
        <UserZeroPost/>
        </>
    }
        </>)
}

export default UserPosts
