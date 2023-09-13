import React , {useState}from 'react'
import companyImage from './Company.webp';
import { RxHeight } from 'react-icons/rx';


const Card = (props) => {
  return (
    <div>
     <div class="card" style={{width:'22rem', border: '2px solid green', height:'31rem' , boxShadow:'5px 5px 5px grey', borderRadius:'10px'}}>
        <img src={companyImage} style={{
            height: '15rem',
            width:'18rem' ,
            objectFit: 'cover',
            
          }}class="card-img-top" alt="..."/>
     <div class="card-body">
        <h5 class="card-title" style={{fontSize:'2.5rem'}}>{props.title}</h5>
        <p class="card-text" style={{fontSize:'1.5rem'}}>{props.about}</p>
        <a href={props.link} class="btn btn-success btn-lg" style={{position:'absolute', bottom:'1rem'}} >Visit</a>
     </div>
     </div>
    </div>
  )
}

export default Card