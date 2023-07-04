import React from 'react'
import Header from '../components/Header'
import AddPostForm from '../components/AddPostForm'
import cover from '../bgImage.png'

const AddPostPage = () => {
  return (
    <div style={{ backgroundImage: `url(${cover})` }} className='bg-[red] h-[100vh]'>
   <Header/>
   <AddPostForm />
    </div>
  )
}

export default AddPostPage