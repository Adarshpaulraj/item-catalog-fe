import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import AxiosService from '../ApiService/ApiService';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


function Edit() {
const navigate=useNavigate()
const params=useParams()
const [name,setName]=useState("")
const [image,setImage]=useState("")
const [brand,setBrand]=useState("")
const [category,setCategory]=useState("")
const [price,setPrice]=useState("")
const [disprice,setDisprice]=useState("")
const [offer,setOffer]=useState("")
const [stock,setStock]=useState("")
const [description,setDescription]=useState("")
const [size,setSize]=useState()
const [product,setProduct]=useState({})

const getBlogById=async()=>{
    try {
    const res=await AxiosService.get(`/item/${params.id}`)
    if(res.status===200){
    setName(res.data.data.name)
    setImage(res.data.data.imageUrl)
    setBrand(res.data.data.brand)
    setCategory(res.data.data.category)
    setPrice(res.data.data.price)
    setDisprice(res.data.data.discountPrice)
    setOffer(res.data.data.offer)
    setStock(res.data.data.countInStock)
    setDescription(res.data.data.description)
    setSize(res.data.data.size)
     setProduct(res.data.data)
    } 
    } catch (error) {
    toast.error(error.response.data.message)
    }
}



useEffect(()=>{
if(params.id){
    getBlogById()
 }else{
    navigate('/home')
}
},[])

const handleEdit=async()=>{
  try {
      const res=await AxiosService.put(`/item/edit/${product._id}`,{
          name,image,brand,price,category,description,disprice,stock,offer,size
      })
      if(res.status===200)
     {
       toast.success(res.data.message)
       navigate('/home')
     }
      } catch (error) {
      toast.error(error.response.message)
      }
  
  
}
  return <>
   <div className='container-fluid ps-4 create-img'>
  <div  >
    <Form className='form-img'>
      <h3>Create Product</h3>
      <Form.Group className="mb-2"  >
        <Form.Label>Image URL</Form.Label>
        <Form.Control className='w-75' type="text" value={image} placeholder=" Enter the Image URL" onChange={(e)=>setImage(e.target.value)}/>
      </Form.Group>
      
      <Form.Group className="mb-2 " >
        <Form.Label>Description</Form.Label>
        <FloatingLabel
        controlId="floatingTextarea"
        label="Enter The Description"
        className="mb-3"
      > <Form.Control as="textarea" className='w-75' value={description} placeholder="Enter The Description"  onChange={(e)=>setDescription(e.target.value)} />
      </FloatingLabel>
       </Form.Group>

 
     <div className='d-flex gap-2  '>
     <Form.Group className="mb-2"  >
        <Form.Label>Product Name</Form.Label>
        <Form.Control type="text" placeholder="Enter the Product Name" value={name} onChange={(e)=>setName(e.target.value)}/>
     
       </Form.Group>
          <Form.Group className="mb-2  "  >
        <Form.Label>Brand Name</Form.Label>
        <Form.Control type="text" placeholder="Enter BrandName" value={brand} onChange={(e)=>setBrand(e.target.value)}/>
       </Form.Group>
         </div>  
         <div className='d-flex gap-2  '>
         <Form.Group className="mb-2"  >
        <Form.Label>Catagory</Form.Label>
        <Form.Control type="text" placeholder="Enter Catagory" value={category} onChange={(e)=>setCategory(e.target.value)}/>
       </Form.Group>
        <Form.Group className="mb-2"  >
        <Form.Label>Actual Price</Form.Label>
        <Form.Control type="Number" placeholder="Enter ActualPrice" value={price} onChange={(e)=>setPrice(e.target.value)}/>
       </Form.Group>

      <Form.Group className="mb-2 "   >
        <Form.Label>Discount Price</Form.Label>
        <Form.Control type="Number" placeholder="Enter DiscountPrice" value={disprice} onChange={(e)=>setDisprice(e.target.value)}/>
       </Form.Group>
         </div>
         <div className='d-flex gap-2  '>
        <Form.Group className="mb-2"  >
        <Form.Label>Offer</Form.Label>
        <Form.Control type="Number" placeholder="Enter Offer ex:50%" value={offer}  onChange={(e)=>setOffer(e.target.value)}/>
       </Form.Group>

      <Form.Group className="mb-3 "  >
        <Form.Label>Count In stock</Form.Label>
        <Form.Control type="Number" placeholder="Enter CountInStock" value={stock} onChange={(e)=>setStock(e.target.value)}/>
       </Form.Group>
       <Form.Group className="mb-2 "  >
        <Form.Label>Size</Form.Label>
        <Form.Control type="text" placeholder="ex:S M L XL XXL XXXL" value={size} onChange={(e)=>setSize(e.target.value)}/>
       </Form.Group>
         </div>
     
       <Button variant="primary" type="submit" onClick={()=>handleEdit()}> Submit </Button>
    </Form>
    </div>
    <h2 className='preview'>Pre-view</h2>
       <div className=' cotainer-fluid d-flex create-view' >
     <div  >
      <Card.Img variant="top rounded"  className='img-scale'  style={{width:'30rem'}} src={product.imageUrl}/>
      </div>
      <div >
      <Card className='textbody' style={{ width: '50rem' ,height:'80vh'}}>
        <Card.Body> 
        <Card.Title style={{fontSize:'20px'}}>{product.name}</Card.Title>
    
          <Card.Title style={{fontSize:'30px'}}>{product.description}</Card.Title>
          <Card.Text className='text-color mb-0 p-0' style={{fontSize:'15px'}}>
        Special Price
      </Card.Text>
          <div className='d-flex gap-4 '>
      <Card.Text className='f-weight'>
      &#8377;{product.discountPrice} <span className=' text-muted text-decor' style={{fontSize:'20px'}} >{product.price}</span>
      </Card.Text> 
     
       <Card.Text className='text-color pt-2' style={{fontSize:'20px'}}>
        {product.offer}% Off
      </Card.Text>
     </div>
     <Card.Subtitle className="mb-2 text-muted pb-1" style={{fontSize:'20px'}} >Brand :{product.brand}</Card.Subtitle>
      <div className='d-flex gap-3'>
      <Card.Text className='text-muted' style={{fontSize:'15px'}}>
          CountInStock :<span className='stock'> {product.countInStock}</span>
          </Card.Text>
          <Card.Text className='text-muted' style={{fontSize:'15px'}}>
            Available Size :<span> {product.size}</span>
          </Card.Text>
      </div>
            </Card.Body>
      </Card>
      </div>
 </div>
      
    </div>
  </>
}

export default Edit