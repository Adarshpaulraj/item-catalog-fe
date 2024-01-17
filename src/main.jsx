import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'react-toastify/dist/ReactToastify.css'
 import 'bootstrap/dist/css/bootstrap.min.css'
import { ToastContainer } from 'react-toastify'
 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <ToastContainer autoClose={2000}/>
   </React.StrictMode>,
)
