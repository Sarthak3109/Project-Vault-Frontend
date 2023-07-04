
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './Pages/HomePage';
import PostPage from './Pages/PostPage';
import AuthPage from './Pages/AuthPage';
import AllPosts from './Pages/AllPosts';
import PostPageByType from './Pages/PostPageByType';
import { useSelector } from 'react-redux';
import { authActions } from './store';
import { useDispatch } from 'react-redux';
import Profile from './Pages/Profile';
import AddPostPage from './Pages/AddPostPage';
import { useEffect } from 'react';
import EditPostPage from './Pages/EditPostPage';
import ErrorPage from './Pages/ErrorPage';
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
 
  {
    path: "/posts",
    element: <PostPage />,
  },
 
  {
    path: "/auth",
    element: <AuthPage />,
  },
  {
    path : "/posts/all-projects",
    element : <AllPosts />
  },{
    path : "/posts/:type",
    element : <PostPageByType />
  },
  {
    path : "/profile",
    element : <Profile/>
  }
  ,
  {
    path : "/add",
    element : <AddPostPage />
  },
  {
    path : "/error",
    element : <ErrorPage />
  },
  
  {
    path : "/posts/:type/:id",
    element : <EditPostPage />
  },
  {
    path : "*",
    element : <ErrorPage />
  }
]);

function App() {
  const dispatch = useDispatch()
  const isLoggedIn = useSelector(state => state.isLoggedIn)

  useEffect(()=>{
    dispatch(authActions.initalise())
  })
  return (
   
     <RouterProvider router={router} />
  );
}

export default App;
