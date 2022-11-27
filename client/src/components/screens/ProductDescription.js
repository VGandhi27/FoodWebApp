import React,{useEffect,useState,useContext} from 'react'
import i3 from '../Image/i6.png'
import {UserContext} from '../../App'

const ProductDescription = () => {
  const [data,setData]=useState([])
  const {state,dispatch}=useContext(UserContext)
  useEffect((titlevv)=>{
  fetch(`/allpost/${title}`,{
     headers:{
       "Authorization":"Bearer "+localStorage.getItem("jwt")
     }
   }).then(res=>res.json())
   .then(result=>{
     console.log(result)
     setData(result.posts)
    })
  },[])
   
  return (
    <>
    {data.map(item=>{
      
      return   <div className="productDescription">
      <div className="card desc-card">
        <div className="card-image">
          <img src={i3} alt="" style={{height:"300px", width:"500px"}}/>
        </div>
         <div className="card-content">
         <i className="material-icons" style={{color:'red'}}>favorite</i>
          <h2>{item.title}</h2>
          <h3> &#8377; {item.body}</h3>
          <button class="btn waves-effect #e65100 orange darken-4 btn-large" type="submit" name="action">Add to Cart
      <i class="material-icons right">Add to cart</i>
    </button>
          <input type="text" placeholder='add a comment' />
         </div>
        </div>
      </div>

    })?
    console.log("Happy")
  
   : <h2>loading...!</h2>}
    </>
  )
}

export default ProductDescription