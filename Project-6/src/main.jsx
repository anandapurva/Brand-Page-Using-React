import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import ContactUs from './components/ContactUs/ContactUs.jsx'
import Users from './components/Users/Users.jsx'
import Github, {githubInfoLoader} from './components/Github/Github.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path:'',
        element: <Home />
      },
      {
        path:'about',
        element: <About />
      },
      {
        path:'contact',
        element: <ContactUs />
      },
      {
        path:'user/:userid',
        element: <Users />
      },
      {
       
        loader: githubInfoLoader,
        path:'/github',
        element: <Github />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
