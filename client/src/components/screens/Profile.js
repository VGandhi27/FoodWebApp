import React,{useEffect,useState,useContext} from 'react'
import {UserContext} from '../../App'

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
        <img  alt="" style={{width:"160px",height:'160px',borderRadius:"80px"}}
        src="https://images.unsplash.com/photo-1520302723644-46526f5a7c2a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=836&q=80" />
      </div>
      <div>
        <h4>{state?state.name:"loading"}</h4>
        <h5>{state?state.email:"loading"}</h5>
        <div style={{display:"flex", justifyContent:"space-between" ,width:"108%"}}>
          <h5>{mypics.length} posts</h5>
          <h5>{state?state.followers.length:0} followers</h5>
          <h5>{state?state.following.length:0} following</h5>
        </div>
      </div>
    </div>
    
    <div className='gallery'>
      {
        mypics.map(item=>{
          return(
          <img key={ item._id}className='item' src={item.photo} alt={item.title} />
)
          
        })
      }
   
    </div>
    </div>
  )
}
export default Profile