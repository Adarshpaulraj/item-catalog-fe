import React from 'react'
 import Card from 'react-bootstrap/Card';
 import { useNavigate } from 'react-router-dom';

 
 function ProductCard({e}) {
  const navigate=useNavigate()
   return  <>
  
  <Card className='boxhover'  style={{ width: '13rem'  }} onClick={()=>navigate( `/item/${e._id}`)}>
    <Card.Img className='pic-size' variant="top"  src={e.imageUrl}/>
    <Card.Body className='text-body ps-3'>
      <Card.Title>{e.name}</Card.Title>
      <Card.Text style={{fontSize:'12px'}}>{e.description}</Card.Text>
      <div className='d-flex gap-4 '>
        <Card.Text>&#8377;{e.discountPrice} 
         &nbsp; &nbsp; <span className='text-decor'>{e.price}</span>
        </Card.Text> 
        <Card.Text className='text-color'>{e.offer}% Off</Card.Text>
      </div>
      <div className='d-flex gap-3'>
        <Card.Text className='text-muted'> Size</Card.Text>  
        <Card.Text>{e.size}</Card.Text>
      </div>
     </Card.Body>
  </Card> </>
}

export default ProductCard