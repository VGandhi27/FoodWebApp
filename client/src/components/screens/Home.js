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
    {/* <div className="main">
      <div className="container ">
        <div className="row">
          <div className="col-3">

          
       {
       data.map(item=>{
          return(
            <div className='home left-align'>
            <div className="card home-card small " key={item._id}>
            
         <div className="card-image">
           <img src={item.photo} alt="" />
         </div>
          <div className="card-content">
          
           <h6>{item.title}</h6>
           <p>{item.body}</p>
                    </div>
         </div>
         </div>
          )
        })
       }
       
     

 
   
          </div>
        </div>
      </div>
    </div>
    */}
          <div className="container">
        <div className="row">{
        data.map(item=>{
            return(
                <div className="col-sm-3" key={item._id}>
                <div className="card" style={{ width: "15rem;" }}>
                  <img src={item.photo} className="card-img-top" alt="..." style={{width:"100px;"}} />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">
                    {item.body}
                    </p>
                    <a href="#" className="btn btn-primary btn-sm"
                    onClick={()=>{addToCart(item._id)}}>
                      Add to Cart
                    </a>
                    
                    {/* {item.likes.includes(state._id)
          ?

          <i className="material-icons"
          onClick={()=>{unlikePost(item._id)}}
         >thumb_down</i>
         :

         <i className="material-icons"
         onClick={()=>{likePost(item._id)}}
         >thumb_up</i> 

        } */}

                    <a href="#" className="btn btn-primary btn-sm">
                      Price:{item.body}
                    </a>
                  </div>
                </div>
              </div>
            )
        })
    }
        </div>
      </div>
   
    </>
  )
}

export default Home