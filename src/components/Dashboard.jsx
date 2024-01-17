import React, { useState } from 'react'
import Table from 'react-bootstrap/Table';
import { useEffect } from 'react';
import AxiosService from '../ApiService/ApiService';
import { toast } from 'react-toastify';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';


 
function Dashboard() {
const [click,setClick]=useState()

  return <div className='container-fluid'>
        <Nav variant="tabs" >
      <Nav.Item>
        <Nav.Link  onClick={()=>setClick("product")}>Product List</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1"  onClick={()=>setClick("users")}>Users List</Nav.Link>
      </Nav.Item>
     </Nav>
     {
      click==='users'?<UserLink/>:<ProductListLinks/>
     }
  </div>
}

function ProductListLinks(){
  const [data,setData]=useState([])
  const navigate=useNavigate()

   const getAllData=async()=>{
    try {
    const res=await AxiosService.get('/dashboard')
    if(res.status===200){
    setData(res.data.data)
    }
 } catch (error) {
  toast.error(error.response.data.message)
 }}

useEffect(()=>{
 getAllData()
},[])


  return <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Product Name</th>
      <th>Image</th>
       <th>Category</th>
       <th>Created At</th>
       <th>Updated By</th>
        <th>Created By</th>
        <th>Action</th>
    </tr>
  </thead>
  <tbody>
   {
    data.map((e,i)=>{
      const handleDelete=async(_id)=>{
        try {
          const res = await AxiosService.delete(`/item/delete/${_id}`)
          if(res.status===200){
            toast.success(res.data.message)
            window.location.reload(false)
           }
        } catch (error) {
          toast.error(error.response.message)
      
        }
      }
      
      return <tr key={i} onClick={()=>navigate( `/item/${e._id}`)}>
        <td>{i+1}</td>
      <td className='col-2'>{e.name}</td>
      <td className='col-2'><img src={e.imageUrl} className='table-image' /></td>
      <td>{e.category}</td>
      <td>{e.createdAt}</td>
       <td>{e.modifiedAt}</td>
      <td>{e.modifiedBy}</td>
      <td className='d-flex'><Button variant="warning" size='sm' type="submit" onClick={()=>navigate(`/edit/${e._id}`)}> Edit</Button>
        <Button variant="danger" type="submit" size='sm' onClick={()=>handleDelete(e._id)}> Delete </Button></td>
    </tr>
    })
   }
   </tbody>
</Table>
}

function UserLink(){
 const [user,setUser]=useState([])

  const getUsers=async()=>{
    const res = await AxiosService('/user')
    if(res.status===200){
      setUser(res.data.users)
      console.log(res.data.users);
    }
  }  
  useEffect(()=>{
    getUsers()
  },[])
  return <Table striped bordered hover style={{marginBottom:'200px'}}>
  <thead>
    <tr>
      <th>#</th>
      <th>Name</th>
      <th>Email</th>
       <th>Role</th>
      <th>Created At</th>
      <th>Id</th>
     </tr>
  </thead>
  <tbody>
   {
    user.map((e,i)=>{
      return <tr key={i}>
        <td>{i+1}</td>
       <td>{e.firstName} {e.lastName}</td>
       <td>{e.email}</td>
       <td>{e.role}</td>
       <td>{e.createdAt}</td>
       <td>{e._id}</td>
    </tr>
    })
   }
   </tbody>
</Table>
}


export default Dashboard