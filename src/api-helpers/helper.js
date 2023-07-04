import axios from "axios"
export const getAllPosts = async()=>{
    try
    {const response = await fetch('https://project-vault-backend.onrender.com/post')
    const data = await response.json()
    console.log(data)
    return data.posts
}
    catch(err){
        console.log(err)
    }
}

export const getUserById= async(id)=>{
    try
    {const response = await fetch(`https://project-vault-backend.onrender.com/user/${id}`)
    const data = await response.json()

    return data
}
    catch(err){
        console.log(err)
    }
}

export const getPostByType= async(type)=>{
    console.log("sf")
    try
    {const response = await fetch(`https://project-vault-backend.onrender.com/post?type=${type}`)
    const data = await response.json()
    return data
}
    catch(err){
        console.log(err)
    }
}

export const Login = async(credentials)=>{
     console.log(credentials)
    try{
    const response  = await  fetch('https://project-vault-backend.onrender.com/user/login', {
        method: 'POST',
        body: JSON.stringify(credentials),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        }
        })
    const data = await response.json()
    if(data.message === 'Login Successfull'){
        localStorage.setItem("user", data.id )
    }
    return data.message
    }
    catch(err){
        console.log(err)
    }
}
export const SignIn = async(credentials)=>{
    const {email, password, name} = {...credentials}
    const input = {email, password, name}
    if(credentials.password !== credentials.confirm_password)
        return "Passwords dont match"
    if(credentials.password.length < 6)
        return "Make a more secure password"
   try{
   const response  = await  fetch('https://project-vault-backend.onrender.com/user/signup', {
       method: 'POST',
       body: JSON.stringify(input),
       headers: {
         'Content-type': 'application/json; charset=UTF-8',
       }
       })
   const data = await response.json()
   if(data.message === 'Account Successfully Created'){
    localStorage.setItem("user", data.user._id )
}
   return data.message
   }
   catch(err){
       console.log(err)
   }
}

export const AddPost = async (post)=>{
    try{
        const response  = await  fetch('https://project-vault-backend.onrender.com/post', {
            method: 'POST',
            body: JSON.stringify(post),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            }
            })
        const data = await response.json()
        return data.message
        
     }
        
        catch(err){
            console.log(err)
            return "INTERNAL SERVER ERROR"
        }
}



export const DeletePostById = async(id)=>{
    const response = await fetch(`https://project-vault-backend.onrender.com/post/${id}`,{
        method : 'DELETE'
    })
    return response.message;
}

export const getPostById = async(id)=>{
        const response = await fetch(`https://project-vault-backend.onrender.com/post/${id}`)
    const data = await response.json()
    return data.post
}
export const updatePostById = async(post,id)=>{
    try{
        const response  = await  fetch(`https://project-vault-backend.onrender.com/post/${id}`, {
            method: 'PUT',
            body: JSON.stringify(post),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            }
            })
        const data = await response.json()
        console.log(data)
        return data.message
        
     }
        
        catch(err){
            console.log(err)
            return "INTERNAL SERVER ERROR"
        }
}


export const getPostByUserPosts = async(posts)=>{
   let arr = []
    console.log("hi")
    for(const post of posts){
 
        const data = await getPostById(post)
        console.log('data', data)
        arr = [...arr, data]
    }
    console.log(arr)
    return arr;
}