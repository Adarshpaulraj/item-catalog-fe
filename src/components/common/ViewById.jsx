import React from 'react'
import Card from 'react-bootstrap/Card';
 import AxiosService from '../../ApiService/ApiService';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
 import {toast} from 'react-toastify'
 import Button from 'react-bootstrap/Button';
 import { useNavigate } from 'react-router-dom';
 function ViewById() {
  const navigate=useNavigate()
  const [products,setProducts]=useState([])
   const params=useParams()
  const userData=JSON.parse(sessionStorage.getItem('userData'))

  const getBlogById=async()=>{
  try {
    const res=await AxiosService.get(`/item/${params.id}`)
    if(res.status===200){
      toast.success(res.data.message)
      setProducts(res.data.data)
    }else{
      toast.error(res.data.message)
     }
  } catch (error) {
    toast.error(error.response.message)
  }
   }

const handleDelete=async()=>{
  try {
    const res = await AxiosService.delete(`/item/delete/${params.id}`)
    if(res.status===200){
      toast.success(res.data.message)
      navigate('/home')
    }
  } catch (error) {
    toast.error(error.response.message)

  }
}




useEffect(()=>{
   getBlogById()
  },[])

  return <div className='container-fluid img-view'>
  <div className=' d-flex gap-4 ms-5 ' >
    <div  >
      <Card.Img variant="top" className='img-scale' src={products.imageUrl}/>
      </div>
      <div >
      <Card className='textbody' >
        <Card.Body className='card-body'> 
        <Card.Title style={{fontSize:'20px'}}>{products.name}</Card.Title>
    
          <Card.Title style={{fontSize:'30px'}}>{products.description}</Card.Title>
          <Card.Text className='text-color mb-0 p-0' style={{fontSize:'15px'}}>
        Special Price
      </Card.Text>
          <div className='d-flex gap-4 mt-0 p-0'>
      <Card.Text className='f-weight'>
      &#8377;{products.discountPrice} <span className=' text-muted text-decor' style={{fontSize:'20px'}} >{products.price}</span>
      </Card.Text> 
     
       <Card.Text className='text-color pt-2' style={{fontSize:'20px'}}>
        {products.offer}% Off
      </Card.Text>
     </div>
    <Card.Subtitle className="mb-2 text-muted pb-1" style={{fontSize:'20px'}} >Brand :{products.brand}</Card.Subtitle>
    <Card.Text  style={{fontSize:'20px'}}>
        Category : {products.category}
      </Card.Text>
       <div className='d-flex gap-3'>
      <Card.Text className='text-muted' style={{fontSize:'15px'}}>
          CountInStock :<span className='stock'> {products.countInStock}</span>
          </Card.Text>
          <Card.Text className='text-muted' style={{fontSize:'15px'}}>
            Available Size :<span> {products.size}</span>
          </Card.Text>
      </div>
           <Card.Text>  For Contact Details : +914455738894</Card.Text>
           {
       userData.role==='admin'?<div className='admin-btn'>
        <Button variant="warning" type="submit" onClick={()=>navigate(`/edit/${products._id}`)}> Edit</Button>
        <Button variant="danger" type="submit" onClick={ handleDelete}> Delete </Button>
       </div>: <></>

      }
           </Card.Body>
      </Card>
      </div>
 
   </div>
   </div>
}

export default ViewById