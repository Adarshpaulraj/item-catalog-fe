import React from 'react'
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import { useEffect } from 'react';
import AxiosService from '../../ApiService/ApiService';
import { useNavigate } from 'react-router-dom';

function Tops() {
    const [products,setProducts]=useState([])
    const navigate = useNavigate()
  
    const getAllProducts=async()=>{
     try {
      const res = await AxiosService.get('/item')
      
      setProducts(res.data.data)
       console.log(res.data.data)
     } catch (error) {
      console.log(error.response.data.message);
     }
    }
   
   useEffect(()=>{
   getAllProducts()
   },[])
  
   const itemProducts=products.filter((e)=>e.name.toLowerCase()==='top')
     return  <div className='container-fluid card-img'  >
      {
        itemProducts.map((e)=>{
         return <Card className='boxhover'  style={{ width: '13rem'  }} onClick={()=>navigate(`/item/${e._id}`)}>
          <Card.Img className='pic-size' variant="top"  src={e.imageUrl}/>
          <Card.Body className='text-body ps-3'>
            <Card.Title>{e.name}</Card.Title>
            <Card.Text style={{fontSize:'12px'}}>{e.description}</Card.Text>
            <div className='d-flex gap-4 '>
            <Card.Text >
            &#8377;{e.discountPrice} <span className='text-decor'> {e.price}
      </span>
            </Card.Text> 
           
             <Card.Text className='text-color'>
              {e.offer}% Off
            </Card.Text>
           </div>
           <div className='d-flex gap-3'>
              <Card.Text className='text-muted'>
              Size
            </Card.Text> 
            <Card.Text   >
              {e.size}
            </Card.Text> 
              
           </div>
           </Card.Body>
        </Card> 
        })
      }
      
     </div>
   }
   

export default Tops