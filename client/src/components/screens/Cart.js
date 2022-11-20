import React from 'react'
import {useState,useEffect,useContext}from 'react'
import {UserContext} from '../../App'

const Cart = () => {
    const [data,setData]=useState([])
   const {state,dispatch}=useContext(UserContext)
   useEffect((id)=>{
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
   },[])

//    const likePost = (id)=>{
  
// }
  return (
    <>
      <div className="small-container cart-page">
           <table>
               <tr>
                   <th>Product</th>
                   <th>Quantity</th>
                   <th>Subtotal</th>
               </tr>
               <tr >
                   <td >{
                     data.map(item=>{
                        return(
<div className="cart-info" key={item._id}>
                           <img src="img/3.jpg" alt=""/>
                       <div>
                           <p>{item.title}</p>
                           <small>{item.sbody}</small><br/>
                           <a href="">Remove</a>
                       </div>
                        </div>
                        )
                     })
                    }
                       
                   </td>
                   <td><input type="number" value="1"/></td>
                   <td>$50.00</td>
               </tr>
          </table>
 
           <div className="total-price" >
               <table>
                   <tr>
                       <td>Subtotal</td>
                       <td>$200.00 </td>
                   </tr>
                  
               </table>
           </div>
       </div> 
    </>
  )
}

export default Cart
