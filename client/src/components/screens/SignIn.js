import React,{useState,useContext} from 'react'
import {Link } from 'react-router-dom'

import M from 'materialize-css'
import {useNavigate} from 'react-router-dom'
import { UserContext } from '../../App'

const SignIn=()=>  {
  const {state,dispatch}=useContext(UserContext)
const [password, setPassword] = useState("")
const [email, setEmail] = useState("")
let navigate =useNavigate();

const PostData =()=>{
  if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
   M.toast({html: "Invalid Email", classes:"#d32f2f red darken-2"})
   return
  }  
  fetch("http://localhost:3000/signin",{
    method:"post",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
     
      password,
      email
    })
  }).then(res=>res.json())
  .then(data=>{
    console.log(data)
   if(data.error){
    M.toast({html: data.error, classes:"#d32f2f red darken-2"})
    }else{

      localStorage.setItem("jwt",data.token)
      localStorage.setItem("user",JSON.stringify(data.user))
      dispatch({type:"USER",payload:data.user})
      M.toast({html: "Signed In success", classes:"#43a047 green darken-1"})
    navigate("/");
  }
  }).catch(err=>{
    console.log(err) 
  })

}

  return (
    <div className="mycard">
     <div className="card auth-card input-field ">
        <h2>Goodness</h2>
        <input type="text" placeholder="email" 
         value={email}
         onChange={(e)=>setEmail(e.target.value)}/>

        <input type="password" placeholder="password"
         value={password}
         onChange={(e)=>setPassword(e.target.value)} />
        <button className="btn waves-effect waves-light #64b5f6 blue darken-1"
        onClick={()=>PostData()}
        >SignIn
        </button>
        <h5><Link to="/signup">Don't have an Account ?</Link></h5>

      </div>

    </div>
  )
}


export default SignIn