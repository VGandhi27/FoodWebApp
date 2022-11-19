import React from 'react'
import {useState,useEffect,useContext}from 'react'
import {UserContext} from '../../App'
import { Link} from 'react-router-dom'

const Home=()=> {
   const [data,setData]=useState([])
   const {state,dispatch}=useContext(UserContext)
   useEffect(()=>{
    fetch('/allpost',{
      headers:{
        "Authorization":"Bearer "+localStorage.getItem("jwt")
      }
    }).then(res=>res.json())
    .then(result=>{
      console.log(result)
      setData(result.posts)
     })
   },[])


const deletePost = (postid)=>{
  fetch(`/deletepost/${postid}`,{
      method:"delete",
      headers:{
          Authorization:"Bearer "+localStorage.getItem("jwt")
      }
  }).then(res=>res.json())
  .then(result=>{
      console.log(result)
      const newData = data.filter(item=>{
          return item._id !== result._id
      })
      setData(newData)
  })
}
//make a delete post
  return (
    <>
    <div className="main">
      <div className="container">
        <div className="row">
          <div className="col-3">

          <div className='home'>
       {
       data.map(item=>{
          return(
            <div className="card home-card small" key={item._id}>
            
         <div className="card-image">
           <img src={item.photo} alt="" />
         </div>
          <div className="card-content">
          
           <h6>{item.title}</h6>
           <p>{item.body}</p>
                    </div>
         </div>
   
          )
        })
       }
     

 
    </div>
          </div>
        </div>
      </div>
    </div>
   
    </>
  )
}

export default Home