import React,{useEffect,useState,useContext} from 'react'
import {UserContext} from '../../App'
import {useParams} from 'react-router-dom'

const ProductDescription  = ()=>{
    const [PostDesc,setPostDesc] = useState([])
    const {state,dispatch} = useContext(UserContext)
    const {postid}=useParams()
    console.log(postid)
    useEffect(()=>{
       fetch(`/products/${postid}`,{
           headers:{
               "Authorization":"Bearer "+localStorage.getItem("jwt")
           }
       }).then(res=>res.json())
       .then(result=>{
           console.log(result.posting)
           setPostDesc(result.posting)
           console.log(PostDesc);
       })
    },[])

  return (
    <>
     {PostDesc?   
    //  <h2>Happy</h2>
    <div className="productDescription">
    <div className="card desc-card">
      <div className="card-image">
        <img src={PostDesc.photo} alt="" style={{height:"300px", width:"500px"}}/>
      </div>
       <div className="card-content">
       <i className="material-icons" style={{color:'red'}}>favorite</i>
        <h2>{PostDesc.title}</h2>
        <h3> &#8377; {PostDesc.body}</h3>
        <button class="btn waves-effect #e65100 orange darken-4 btn-large" type="submit" name="action">Add to Cart
    <i class="material-icons right">add_shopping_cart</i>
    </button>
        <input type="text" placeholder='add a comment' />
       </div>
      </div>
    </div>
    
 :  <h2>Loading...!</h2> }
  
  
   
    </>
  )
}
export default ProductDescription