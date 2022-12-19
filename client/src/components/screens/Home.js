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

   const likePost = (id)=>{
    fetch('/like',{
        method:"put",
        headers:{
            "Content-Type":"application/json",
            "Authorization":"Bearer "+localStorage.getItem("jwt")
        },
        body:JSON.stringify({
            postId:id
        })
    }).then(res=>res.json())
    .then(result=>{
               console.log(result)
      const newData = data.map(item=>{
          if(item._id==result._id){
              return result
          }else{
              return item
          }
      })
      setData(newData)
    }).catch(err=>{
        console.log(err)
    })
}
const unlikePost = (id)=>{
  fetch('/unlike',{
      method:"put",
      headers:{
          "Content-Type":"application/json",
          "Authorization":"Bearer "+localStorage.getItem("jwt")
      },
      body:JSON.stringify({
          postId:id
      })
  }).then(res=>res.json())
  .then(result=>{
    const newData = data.map(item=>{
        if(item._id==result._id){
            return result
        }else{
            return item
        }
    })
    setData(newData)
  }).catch(err=>{
    console.log(err)
})
}
const addToCart = (id)=>{
//   fetch('/addCart',{
//       method:"put",
//       headers:{
//           "Content-Type":"application/json",
//           "Authorization":"Bearer "+localStorage.getItem('jwt')
//       },
//       body:JSON.stringify({
//           CartId:id
          
//       })
//   }).then(res=>res.json())
//   .then(res=>res.json())
//   .then(result=>{
//     const newData = data.map(item=>{
//         if(item._id==result._id){
//             return result
//         }else{
//             return item
//         }
//     })
//     setData(newData)
//   }).catch(err=>{
//     console.log(err)
// })
}

//make a delete post
  return (
    <>
   {data?
    <div className="container">
    <div className="row">
  {
  data.map(item=>{
      return(
        
          <div className="col s12 m4" key={item._id}>
          <div className="card small" 
          // style={{ width: "15rem;" }}
          >
            <img src={item.photo} className="card-img-top" alt="..." 
           style={{height:"150px", width:"200px"}}
             /> 
             
            <div className="card-body"><center>
              <h6 className="card-title">{item.title}</h6>
              
              <br />
              </center>
              <Link to={ "/productdescription/"+item._id} >
          <button className="btn waves-effect #e65100 orange darken-4 btn-medium" type="submit" name="action">More Details
             </button>
          </Link>
             
            </div>
           
          </div>
        </div>
                   )
  })
}
</div>

</div>
: <h2>Loading....!</h2>

   }
         
   
   
    </>
  )
}

export default Home