import React from 'react'
import {useState,useEffect,useContext}from 'react'
import {UserContext} from '../../App'
import M from 'materialize-css'

const Cart = () => {
     const [data,setData]=useState([])
     const {state,dispatch}=useContext(UserContext)
     useEffect(()=>{
        fetch('/mypost',{
            headers:{
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            }
        }).then(res=>res.json())
        .then(result=>{
            console.log(result)
            setData(result.mypost)
        })
     },[])

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
          //   console.log(result)
          const newData = (data=>{
              if(data._id==result._id){
                  return result
              }else{
                  return data
                  
              }
          })
          setData(newData)
          console.log(data)
          M.toast({html: "Remove from Cart", classes:"#43a047 green darken-1"})
        }).catch(err=>{
          console.log(err)
      })
  }
      
     

  return (
    <>
      <div className="small-container cart-page">
           <table>
               <tr>
                   <th>Product</th>
                   <th>Quantity</th>
                   <th>Subtotal</th>
               </tr>
               
               
                 {
                     data.map(item=>{
                        return(<tr >
                   <td >
                        <div className="cart-info" key={item._id}>
                           <img src={item.photo} alt=""/>
                       <div>
                           <p>{item.title}</p>
                           <small>&#8377;{item.body}</small><br/>
                           <a href="" onClick={()=>{unlikePost(data._id)}}>Remove</a>
                       </div>
                        </div>
                       
                       
                   </td>
                   <td><input type="number" defaultValue="1"/></td>
                   <td>&#8377;{item.body}</td></tr>
                    )
                })
               } 
                   
             
          </table>
 
          
           
          <div className="total-price">
     <table >
                   <tr>
                       <td>Subtotal</td>
                       <td> 
                       {`₹${data.reduce(
                  (acc, item) => acc + parseInt(item.body) ,
                  0
                )}`}</td>
                   </tr>
                   <tr>
                    <td>Tax</td>
                    <td>&#8377;30.00 </td>
                </tr>
                <tr>
                    <td>Total</td>
                    <td>{`₹${data.reduce(
                  (acc, item) => acc + parseInt(item.body)+30 ,
                  0
                )}`} </td>
                </tr>
               </table>
              
           </div>
           
           <main><button className="btn waves-effect #e65100 orange darken-4 btn-large" type="submit" name="action" 
                         >Check Out
            </button></main>
           
       </div> 

    
    </>
  )
}

export default Cart
