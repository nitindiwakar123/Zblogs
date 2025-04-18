import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux';
import store from './store/store.js';
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router-dom";
import { Home, Login, Signup, CreatePost, Post, About, Blogs, EditPost } from "./pages";
import { Protected } from "./components"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={(
        <Protected authentication={false}>
          <About/>
        </Protected>
      )} />
      <Route path='/blogs' element={(
        <Protected authentication={false}>
          <Blogs />
        </Protected>
      )} />      
      <Route path='/login' element={(
        <Protected authentication={false}>
          <Login />
        </Protected>
      )} />
      <Route path='/signup' element={(
        <Protected authentication={false}>
          <Signup />
        </Protected>
      )} />
      <Route path='/create-post' element={(
        <Protected authentication={true}>
          <CreatePost />
        </Protected>
      )} />
      <Route path='/edit-post/:slug' element={(
        <Protected authentication={true}>
          <EditPost />
        </Protected>
      )} />
      <Route path='post/:slug' element={(
        <Protected authentication={true}>
          <Post />
        </Protected>
      )} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
