import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import AxiosService from '../ApiService/ApiService';
import {  useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

 function Login() {
  const navigate=useNavigate()
  const[email,setEmail]=useState("")
  const [password,setPassword]=useState("")

const handleLogin=async()=>{
try {
  const res=await AxiosService.post('/user/login',{
    email,
    password
  })
  console.log(res.data);
  if(res.status===200){
     toast.success(res.data.message)
     sessionStorage.setItem('token',res.data.token)
     sessionStorage.setItem('userData',JSON.stringify(res.data.userdata))
     if(res.data.userdata.role==='admin'){
      navigate('/home')
     }else{
      navigate('/home')
     }
  }else{
    toast.error(res.data.message)

  }
} catch (error) {
  console.log(error.message)
}
}

  return  <div className='container-fluid login-page '>
    <div className='login'>
      <h3>LOGIN HERE !</h3>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
      </Form.Group>
       <div className="d-grid gap-2">
      <Button variant="dark" size="sm p-2" onClick={handleLogin}>
        Login
      </Button>
      <Button variant="warning" size="sm p-2" onClick={()=>{navigate('/signup')}}>
        SignUp
      </Button>
    </div>
      
      
    </Form>
    </div>
 
  </div>
}

export default Login