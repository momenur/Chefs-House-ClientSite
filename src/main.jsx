import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layou/Main.jsx';
import Home from './components/Home/Home.jsx';
import Blog from './components/Blog/Blog.jsx';
import Register from './components/Login/Register.jsx';
import Login from './components/Login/Login.jsx';
import AuthProviders from './providers/AuthProviders.jsx';
import ErrorPage from './components/PageNotFound/ErrorPage.jsx';
import ViewRecipes from './components/ViewRecipes/ViewRecipes.jsx';
import PrivateRouts from './routs/PrivateRouts.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader:async () => {
          const res = await fetch('http://localhost:5000/chefs');
          const data = await res.json();
          return data;
        }
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/view/:id',
        element: <PrivateRouts><ViewRecipes></ViewRecipes></PrivateRouts>
      },
      {
        path: '*',
        element: <ErrorPage></ErrorPage>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>,
)
