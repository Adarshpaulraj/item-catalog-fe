import React from 'react'
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';


function UseLogout() {
    const navigate=useNavigate()
  return  ()=>{
    sessionStorage.clear()
    toast.success('sucessfully logout')
    navigate('/login')
  }
}

export default UseLogout