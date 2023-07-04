import React from 'react'
import Header from '../components/Header'
import ProjectTitleCard from '../components/ProjectTitleCard'
import { ToastContainer } from 'react-toastify'
import background from "../bgImage.png"
const data = [
    {
        href : '/posts/all-projects',
        title : 'All Projects',
        desc : 'Browse through a variety of projects based on techonologies like Web Development, Andriod Developement, Machine Learning, etc '
        ,image : 'https://assets.asana.biz/transform/d2ffb5c8-a7c2-4e39-8447-f8e2501c5bdc/article-project-planning-project-design-2x'
    },
    {
        href : '/posts/Frontend',
        title : 'Front End',
        desc : 'Explore the world of front end by browsing through wonderful UI/UX designs ranging from basic Javascript to NEXTJS projects '
        ,image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR46-JbzM0Nev4Iw2sn7OyORjZ0_36Jtz_oIfYEQ2TJ5CNjyLdI75krifncEjLaboOQJgI&usqp=CAU'
    },
    {
        href : '/posts/Backend',
        title : 'Backend',
        desc : 'With frameworks like Django and NodeJS that make Bankend easier than ever, try these projects to improve your backend skills'
        , image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpxNgsFnoxNmgKzqYi1wFeNCAoVvmTLm0J6aC_yZl1o6Qr-WtDMAqoKv_EjtcO2YaJ_Wo&usqp=CAU'
    },
    {
        href : '/posts/Machine_Learning',
        title : 'Machine Learning',
        desc : 'Keras, TensorFlow and What Not!'
        // desc : 'AI is the future of techonology, with new machine learning algorithms coming everyday why not make your own models by looking at some of these projects '
        ,image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjkH7YW0FPUufysVLR-BSrkixQMngRwNlD1IkB-Qf9siP8kaeCuinoJowAIPTk0alNfqo&usqp=CAU'
    },
    {
        href : '/posts/Android_Development',
        title : 'Android Development',
        desc : 'Flutter, Androio Studio we got them all',
        image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSauuVvAl2kO1XqLCXtamIcSeuSB9I1Oa17v_S0dME1LlzR63tQsDno55qcEJsWQAciBAA&usqp=CAU'
    },
    {
        href : '/posts/Blockchain',
        title : 'Blockchain Development',
        desc : 'Flutter, Androio Studio we got them all',
        image : 'https://online.stanford.edu/sites/default/files/inline-images/1600X900-How-does-blockchain-work.jpg'
    },

    
]
const PostPage = () => {
  return (
    <>
    <Header />
    <div className='flex flex-wrap justify-center items-center gap-5 mt-4'  style={{ backgroundImage: `url(${background})` }}>
  
    {
        data.map((ele,idx)=>(
            <ProjectTitleCard href ={ele.href} title = {ele.title} desc = {ele.desc} image = {ele.image} key = {idx} />
        ))
    }
    </div>

    </>
  )
}

export default PostPage