import React,{useEffect,useState} from 'react'
import ProjectCard from '../components/ProjectCard'
import ProjectTitleCard from '../components/ProjectTitleCard'
import Header from '../components/Header'
import { getAllPosts } from '../api-helpers/helper'
import { ToastContainer } from 'react-toastify'
import ZeroPost from '../components/ZeroPost'
import cover from '../bgImage.png'
import Loader from '../components/Loader'
import Pagination from '../components/Pagination'
const AllPosts = () => {
    const [posts, setposts] = useState([])
    const [loading, setloading] = useState(true)
    const [pages, setpages] = useState(0)
    const [size, setsize] = useState(0)
    useEffect(()=>{
        getAllPosts().then(data => {setposts(data); setloading(false)
            setpages(Math.ceil(data.length/5))
            setsize(data.length)
            
        } ).catch(err => console.log(err))
        
        // console.log(new Date(.date).toLocaleString())

    },[])
    useEffect(()=>{
        console.log(size)
    },[size])
    return (<>
        <Header/>
        <div className='flex flex-wrap justify-center items-center lg:gap-[50px] mt-4min-h-[90vh] sm:min-h-[89vh] pt-5 ' style={{ backgroundImage: `url(${cover})` }}>
        <ToastContainer />
        
        {
            loading ?
            <Loader />
            :
            posts.length > 0 ? 
            <>
           
           { posts.map((post, idx)=>(
               
                
                <ProjectCard setsize = {setsize} size = {size}
                 id = {post._id} link = {post.link} user = {post.user} key={idx} date = {new Date(`${post.date}`).toLocaleDateString()} image={post.imageURL} title={post.title} desc={post.description} href={`/posts/${post.type}`}/>
                
                
                ))}
         
                
             </>
                :
                <>
                <ZeroPost />
                </>
        }
       
        </div>
   
        </>)
}

export default AllPosts
