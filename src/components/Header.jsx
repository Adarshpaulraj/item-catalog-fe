 import React, { useEffect, useState } from 'react'
 import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
  import { Button } from 'react-bootstrap'; 
import { useNavigate } from 'react-router-dom';
import UseLogout from '../Hooks/UseLogout';
  import { BsThreeDotsVertical } from "react-icons/bs";

 function Header() {
   const [role,setRole]=useState()
  const logout=UseLogout()
 const userdata=JSON.parse(sessionStorage.getItem('userData'))
useEffect(()=>{
  if(!userdata){
    logout()
  }else{
  setRole(userdata.role)
  }
})
   return  <>
   <div className='container-fluid mb-3'>
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
        {/* <Navbar.Brand  >
        Item Catalogue
        </Navbar.Brand> */}
        <img src="https://thumbs.dreamstime.com/z/initial-letter-aj-logo-template-design-141099985.jpg?w=768" style={{width:'95px'}} alt="" />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto gap-5">
        {
          role === "admin"?<AdminLink/>:<UserLink/>
        }
      
        <div className='search'>  
        <Form.Control style={{outline:'none'}} type="text" placeholder="Search here"  />  
        <Button variant='warning' >Search</Button>
        </div>
        </Nav>
        <h5>{userdata.firstName} {userdata.lastName}</h5>

        &nbsp; &nbsp;
        <Button variant='danger' onClick={()=>logout()}>Logout</Button>
      
           </Navbar.Collapse>
        </Container>
        </Navbar>
   </div>
   </>
 }
 
 function AdminLink(){
  const navigate=useNavigate()
  return <>
      
      <Nav.Link className='header-btn' onClick={()=>navigate('/home')}>Home</Nav.Link>
        <Nav.Link className='header-btn' onClick={()=>navigate('/create')}>Create</Nav.Link>
        <Nav.Link className='header-btn' onClick={()=>navigate('/dashboard')}>Dashboard</Nav.Link>
  </>
 }


 function UserLink(){
  const navigate=useNavigate()
  return <>
      
      <Nav.Link className='header-btn' onClick={()=>navigate('/home')}>Home</Nav.Link>
        <Nav.Link className='header-btn' onClick={()=>navigate('/men')}>Mens</Nav.Link>
        <Nav.Link className='header-btn' onClick={()=>navigate('/women')}>Womens</Nav.Link>
  </>
 }



 export default Header