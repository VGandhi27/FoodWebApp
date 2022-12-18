import React,{useEffect,useState,useContext} from 'react'
import {UserContext} from '../../App'
import {useParams} from 'react-router-dom'
import M from 'materialize-css'
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
                 const newData = (PostDesc=>{
            if(PostDesc._id==result._id){
                return result
            }else{
                return PostDesc
            }
        })
        setPostDesc(newData)
        M.toast({html: "Add To Cart", classes:"#43a047 green darken-1"})

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
        //   console.log(result)
        const newData = (PostDesc=>{
            if(PostDesc._id==result._id){
                return result
            }else{
                return PostDesc
                
            }
        })
        setPostDesc(newData)
        M.toast({html: "Return from Cart", classes:"#43a047 green darken-1"})
      }).catch(err=>{
        console.log(err)
    })
}
    
  return (
    <>
   
     {PostDesc?   
    //  <h2>Happy</h2>
    <div className="productDescription">
    <div className="card desc-card">
        <center>
      <div className="card-image">
        <img src={PostDesc.photo} alt="" style={{height:"300px", width:"500px"}}/>
      </div></center>
       <div className="card-content">
       <i className="material-icons" style={{color:'red'}}>favorite</i>
        <h2>{PostDesc.title}</h2>
        <h3> &#8377; {PostDesc.body}</h3>
       
        {/* PostDesc.likes.includes(state._id) */}
    {PostDesc.likes
                            ? <>
                            <button className="btn waves-effect #e65100 orange darken-4 btn-large" type="submit" name="action" 
                            onClick={()=>{unlikePost(PostDesc._id)}}>Remove from Cart
                               <i className="material-icons right">remove_shopping_cart</i>
                            </button>    
                            <button className="btn waves-effect #e65100 orange darken-4 btn-large" type="submit" name="action" 
                            onClick={()=>{likePost(PostDesc._id)}}>Add to Cart
                                <i className="material-icons right">add_shopping_cart</i>
                             </button>    </>              
                            : 
                            <button className="btn waves-effect #e65100 orange darken-4 btn-large" type="submit" name="action" 
                            onClick={()=>{likePost(PostDesc._id)}}>Add to Cart
                                <i className="material-icons right">add_shopping_cart</i>
                             </button> 
                            }
                            

                            {/* <h4>Orders Placed:{PostDesc.likes.length}</h4> */}
        <input type="text" placeholder='add a comment' />
       </div>
      </div>
    </div>
    
 :  <h2>Loading...!</h2> }
  
  
   
    </>
  )
}
export default ProductDescription