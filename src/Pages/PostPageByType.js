import React, {useEffect, useState} from 'react'
import ProjectCard from '../components/ProjectCard'
import ProjectTitleCard from '../components/ProjectTitleCard'
import Header from '../components/Header'
import {getAllPosts, getPostByType} from '../api-helpers/helper'
import { useParams } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import ZeroPost from '../components/ZeroPost'
import cover from '../bgImage.png'
import Loader from '../components/Loader'

const PostPageByType = () => {
    const [posts, setposts] = useState([])
    const [loading, setloading] = useState(true)
    const {type} = useParams()
    useEffect(() => {
        getPostByType(type).then(data=>{console.log(setposts(data.posts)); setloading(false)})
    }, [])
    return (
        <>
        <ToastContainer />
            <Header/>

            <div className='flex flex-wrap justify-center items-center lg:gap-[50px] mt-4 min-h-[90vh] sm:min-h-[89vh] ' style={{ backgroundImage: `url(${cover})` }}>
                {
                loading ? <Loader /> : posts.length > 0 ? posts.map((post, idx) => (

                    <ProjectCard user={
                            post.user
                        }
                        id = {post._id}
                        link = {post.link}
                        key={idx}
                        date={
                            new Date(`${
                                post.date
                            }`).toLocaleDateString()
                        }
                        image={
                            post.imageURL
                        }
                        title={
                            post.title
                        }
                        desc={
                            post.description
                        }
                        href={
                            `/posts/${
                                post.type
                            }`
                        }/>
                ))
                :
                <>
                <ZeroPost />
                </>
            } 
            </div>
        </>
    )
}

export default PostPageByType
