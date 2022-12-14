import React,{useEffect,useState,useContext} from 'react'
import {UserContext} from '../../App'
import { Outlet, Link,useNavigate } from "react-router-dom";

const Profile  = ()=>{
    const [mypics,setPics] = useState([])
    const {state,dispatch} = useContext(UserContext)
    console.log(state)
    const [image,setImage] = useState("")
    useEffect(()=>{
       fetch('/mypost',{
           headers:{
               "Authorization":"Bearer "+localStorage.getItem("jwt")
           }
       }).then(res=>res.json())
       .then(result=>{
           console.log(result)
           setPics(result.mypost)
       })
    },[])

  return (
    <div style={{maxWidth:"550px", margin:"0px auto" }}>
    <div style={{
      display:"flex",
      justifyContent:"space-around",
      margin:"18px 0px",
      borderBottom:"1px solid grey"

    }}>
      <div>
        <img  alt="" style={{width:"200px",height:'200px',borderRadius:"100px"}}
        src="https://images.unsplash.com/photo-1520302723644-46526f5a7c2a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=836&q=80" />
      </div>
      <div>
        <h4>{state?state.name:"loading"}</h4>
        <h5>{state?state.email:"loading"}</h5>
        <div style={{display:"flex", justifyContent:"space-between" ,width:"108%"}}>
          <h5>{mypics.length} items Added to Cart</h5>
                 </div>
      </div>
    </div>
    <div>
        <h4>{state?state.name:"loading"}</h4>
        <h5>{state?state.email:"loading"}</h5>
        <div style={{display:"flex", justifyContent:"space-between" ,width:"108%"}}>
          <h5>{mypics.length} items Added to Cart</h5>
                 </div>
      </div>

            
    
    <div className='gallery'>
      <h3>Items Added to Cart</h3>
      {
        mypics.map(item=>{
          return(
            <>
<div className="row">
    <div className="col s12">
      <div className="card medium" key={ item._id}>
        <div className="card-image">
        <img key={ item._id}className='item' src={item.photo} alt={item.title} />
        </div>
        <div className="card-title">
          <h4>{item.title}</h4>
          <h5>Price:&#8377;{item.body}</h5>
          <Link to={ "/productdescription/"+item._id} >
          <button className="btn waves-effect #e65100 orange darken-4 btn-medium" type="submit" name="action">More Details
             </button>
          </Link>
          
        </div>
        
      </div>
    </div>
  </div>
  </>
          )
          
        })
      }
   
    </div>
    </div>
  )
}
export default Profile