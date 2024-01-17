import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {  useNavigate } from 'react-router-dom';
  import { toast } from 'react-toastify';
import { useState } from 'react';
import AxiosService from '../ApiService/ApiService';

function SignUp() {
  const navigate=useNavigate()
 const [firstName,setName]=useState('')
 const [lastName,setLastname]=useState("")
 const [email,setEmail]=useState("")
const [password,setPassword]=useState("")
  const handleSignup=async()=>{
  try {
    const res=await AxiosService.post('/user/create',{
      firstName,
      lastName,
      email,
      password
    })
    if(res.status===201){
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
          navigate('/dashboard')
         }else{
          navigate('/home')
         }
      }else{
        toast.error(res.data.message)
    
      }
       
    toast.success(res.data.message)

    console.log(res.data.userData)
    }else{
      toast.error(res.data.message)
     }
  } catch (error) {
     console.log(error.message);
  }
  }
  return <>
  <div className=' container-fluid  signup'>
  <div className=' sign-up '>
        <Form>
    <h3>LOGIN HERE !</h3>
    <div className='d-flex gap-5  '>
          <Form.Group className="mb-3  "  controlId="formBasicEmail">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setName(e.target.value)}/>
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="email" placeholder="Enter email"  onChange={(e)=>setLastname(e.target.value)}/>
        
      </Form.Group>
        </div>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"  onChange={(e)=>setEmail(e.target.value)}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"  onChange={(e)=>setPassword(e.target.value)}/>
      </Form.Group>
       <div className="d-grid gap-2">
       <Button variant="warning" size="sm p-2"  onClick={handleSignup} >
        SignUp
      </Button>
      <Button variant="dark" size="sm p-2" onClick={()=>navigate('/login')}>
        Login
      </Button >
     
    </div>
      
      
    </Form>
    </div>
  </div>
  </>
}

export default SignUp