import React, { useState } from 'react'
import ProductCard from './common/ProductCard';
  import Image from 'react-bootstrap/Image';
 import AxiosService from '../ApiService/ApiService';
 import { useEffect } from 'react';
 import { useNavigate } from 'react-router-dom';
function Home() {
  const [products,setProducts]=useState([])
  const navigate=useNavigate()
 
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

  return <>
   <div className='container-fluid dashboard'>
    <div>
      <img className='dashboard-img' src="https://marketplace.canva.com/EAFWt8Wq208/1/0/1600w/canva-grey-minimalist-special-offer-banner-landscape-tVz4E4KVLgk.jpg" alt="" />
     </div>
 
<div   className='circle-img'>  
       <div> < Image className='image' src="https://images.bewakoof.com/uploads/grid/app/casual-outfits-for-men-bewakoof-blog-9-1615892381.jpg" onClick={()=>navigate('/blazer')} roundedCircle   />
          <p>Blazers</p></div>
          <div> < Image   className='image'  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTctWif83f4MgQ7r__-b0jrNV_NvieV-xXSZg&usqp=CAU" roundedCircle   onClick={()=>navigate('/tops')} />
          <p>Tops</p></div>
          <div> < Image   className='image'   src="https://images.unsplash.com/photo-1623975522547-3d7ad176973e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1lbnMlMjBmYXNoaW9ufGVufDB8fDB8fHww" roundedCircle  onClick={()=>navigate('/formalshirt')}  />
          <p>Formal shirts</p></div>
          <div> < Image   className='image'  src="https://5.imimg.com/data5/SELLER/Default/2020/12/LX/VE/TG/13181206/ladies-designer-blue-salwar-kameez-punjabi-suit-500x500.jpg" roundedCircle   onClick={()=>navigate('/kurtis')} />
          <p>Kurtis</p></div>
      </div>
  
  <div className='card-img'>
{
  products.map((e,index)=>{
    if(index<20)
     return <ProductCard e={e}   key={e._id}/>
   })}</div>
   </div></>
}
  export default Home