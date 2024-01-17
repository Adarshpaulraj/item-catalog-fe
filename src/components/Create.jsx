import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import AxiosService from '../ApiService/ApiService';
 

function Create() {
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


const handleSubmit=async()=>{
try {
  const res=await AxiosService.post('/item/create',{
    name,image,brand,price,category,description,disprice,stock,offer,size
  })
    if(res.status===201){
    toast.success(res.data.message)
  }
 } catch (error) {
  toast.error(error.response.data.message)
   }}



  return <div className='container-fluid ps-4 create-img'>
  <div  >
    <Form className='form-img'>
      <h3>Create Product</h3>
      <Form.Group className="mb-2"  >
        <Form.Label>Image URL</Form.Label>
        <Form.Control className='w-75' type="text" placeholder=" Enter the Image URL" onChange={(e)=>setImage(e.target.value)}/>
      </Form.Group>
      
      <Form.Group className="mb-2 " >
        <Form.Label>Description</Form.Label>
        <FloatingLabel
        controlId="floatingTextarea"
        label="Enter The Description"
        className="mb-3"
      > <Form.Control as="textarea" className='w-75' placeholder="Enter The Description"  onChange={(e)=>setDescription(e.target.value)} />
      </FloatingLabel>
       </Form.Group>

 
     <div className='d-flex gap-2  '>
     <Form.Group className="mb-2"  >
        <Form.Label>Product Name</Form.Label>
        <Form.Control type="text" placeholder="Enter the Product Name" onChange={(e)=>setName(e.target.value)}/>
     
       </Form.Group>
          <Form.Group className="mb-2  "  >
        <Form.Label>Brand Name</Form.Label>
        <Form.Control type="text" placeholder="Enter BrandName" onChange={(e)=>setBrand(e.target.value)}/>
       </Form.Group>
         </div>  
         <div className='d-flex gap-2  '>
         <Form.Group className="mb-2"  >
        <Form.Label>Select Category</Form.Label>
         <Form.Select aria-label="Default select example" onChange={(e)=>setCategory(e.target.value)}>
       <option   value="Men">Men</option>
      <option   value="Women">Women</option>
     </Form.Select>
       </Form.Group>
        <Form.Group className="mb-2"  >
        <Form.Label>Actual Price</Form.Label>
        <Form.Control type="Number" placeholder="Enter ActualPrice"  onChange={(e)=>setPrice(e.target.value)}/>
       </Form.Group>

      <Form.Group className="mb-2 "   >
        <Form.Label>Discount Price</Form.Label>
        <Form.Control type="Number" placeholder="Enter DiscountPrice" onChange={(e)=>setDisprice(e.target.value)}/>
       </Form.Group>
         </div>
         <div className='d-flex gap-2  '>
        <Form.Group className="mb-2"  >
        <Form.Label>Offer</Form.Label>
        <Form.Control type="Number" placeholder="Enter Offer ex:50%"  onChange={(e)=>setOffer(e.target.value)}/>
       </Form.Group>

      <Form.Group className="mb-3 "  >
        <Form.Label>Count In stock</Form.Label>
        <Form.Control type="Number" placeholder="Enter CountInStock" onChange={(e)=>setStock(e.target.value)}/>
       </Form.Group>
       <Form.Group className="mb-2 "  >
        <Form.Label>Size</Form.Label>
        <Form.Control type="text" placeholder="ex:S M L XL XXL XXXL" onChange={(e)=>setSize(e.target.value)}/>
       </Form.Group>
         </div>
     
       <Button variant="primary" type="submit" onClick={()=>handleSubmit()}> Submit </Button>
    </Form>
    </div>
    <h2 className='preview'>Preview</h2>
       <div className=' cotainer-fluid d-flex  create-view' >
     <div  >
      <Card.Img variant="top rounded"  className='img-scale'  style={{width:'30rem'}} src={image}/>
      </div>
      <div >
      <Card className='textbody' style={{ width: '50rem' ,height:'80vh'}}>
        <Card.Body> 
        <Card.Title style={{fontSize:'20px'}}>{name}</Card.Title>
    
          <Card.Title style={{fontSize:'30px'}}>{description}</Card.Title>
          <Card.Text className='text-color mb-0 p-0' style={{fontSize:'15px'}}>
        Special Price
      </Card.Text>
          <div className='d-flex gap-4 '>
      <Card.Text className='f-weight'>
      &#8377;{disprice} <span className=' text-muted text-decor' style={{fontSize:'20px'}} >{price}</span>
      </Card.Text> 
     
       <Card.Text className='text-color pt-2' style={{fontSize:'20px'}}>
        {offer}% Off
      </Card.Text>
     </div>
      <Card.Subtitle className="mb-2 text-muted pb-1" style={{fontSize:'20px'}} >Brand :{brand}</Card.Subtitle>
      <Card.Text  style={{fontSize:'20px'}}>
        Category : {category}
      </Card.Text>
      <div className='d-flex gap-3'>
      <Card.Text className='text-muted' style={{fontSize:'15px'}}>
          CountInStock :<span className='stock'> {stock}</span>
          </Card.Text>
          <Card.Text className='text-muted' style={{fontSize:'15px'}}>
            Available Size :<span> {size}</span>
          </Card.Text>
      </div>
            </Card.Body>
      </Card>
      </div>
 </div>
      
    </div>
 }

export default Create