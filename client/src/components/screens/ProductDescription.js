import React,{useEffect,useState,useContext} from 'react'
import i3 from '../Image/i6.png'
import {UserContext} from '../../App'
import {useParams} from 'react-router-dom'


const ProductDescription = () => {
    const [userProfiles,setProfiles] = useState(null)
    const [mypics,setPics] = useState([])
    const {state,dispatch} = useContext(UserContext)
    console.log(state)
    const {postid} = useParams()
    const [image,setImage] = useState("")

    useEffect(()=>{
        fetch(`/post/${postid}`,{
            headers:{
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            }
        }).then(res=>res.json())
        .then(result=>{
            //console.log(result)
          
             setProfiles(result)
        })
     },[])
 
 

  return (
    <>
    {userProfiles?
    <div className="productDescription">
    <div className="card desc-card">
      <div className="card-image">
        <img src={userProfiles.post.photo} alt="" style={{height:"300px", width:"500px"}}/>
      </div>
       <div className="card-content">
       <i className="material-icons" style={{color:'red'}}>favorite</i>
        <h2>{userProfiles.post.title}</h2>
        <h3> &#8377; {userProfiles.post.body}</h3>
        <button class="btn waves-effect #e65100 orange darken-4 btn-large" type="submit" name="action">Add to Cart
    <i class="material-icons right">Add to cart</i>
  </button>
        <input type="text" placeholder='add a comment' />
       </div>
      </div>
    </div>
    : <h2>loading...!</h2>}
    </>
  )
}

export default ProductDescription