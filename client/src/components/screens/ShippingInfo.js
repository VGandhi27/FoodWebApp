import React,{useState,useEffect} from 'react'
import M from 'materialize-css'
import {useNavigate} from 'react-router-dom'

const ShippingInfo = () => {
    let navigate =useNavigate();
    const [address,setAddress] = useState("")
      const [sector,setSector] = useState("")
      const [phonenumber,setPhonenumber] = useState("")
      const [city,setCity] = useState("")
      const [image,setImage] = useState("")
      const [data,setData] = useState("")
    //   useEffect(()=>{
    //     if(url){
    //      fetch("/shipping",{
    //          method:"post",
    //          headers:{
    //              "Content-Type":"application/json",
    //              "Authorization":"Bearer "+localStorage.getItem("jwt")
    //          },
    //          body:JSON.stringify({
    //           address,
    //           sector,
    //           city,
    //           phoneno:phonenumber,
    //          })
    //      }).then(res=>res.json())
    //      .then(data=>{
     
    //         if(data.error){
    //            M.toast({html: data.error,classes:"#c62828 red darken-3"})
    //         }
    //         else{
    //             M.toast({html:"Created post Successfully",classes:"#43a047 green darken-1"})
    //            navigate('/')
    //         }
    //      }).catch(err=>{
    //          console.log(err)
    //      })
    //  }
    //  },[url])
   
    // const postDetails = ()=>{
    //     const data = new FormData()
    //     data.append("file",image)
    //    data.append("upload_preset","insta_clone")
    //    data.append("cloud_name","dcyysbj41")
    //    fetch("/shipping",{
    //      method:"post",
    //         body:data
    //     })
    //     .then(res=>res.json())
    //     .then(data=>{
    //        setUrl(data.url)
    //     })
    //     .catch(err=>{
    //         console.log(err)
    //     })
 
     
    // }

    const PostData =()=>{
      M.toast({html: data.message, classes:"#43a047 green darken-1"})
      navigate("/payment");
      // if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
      //  M.toast({html: "Invalid Email", classes:"#d32f2f red darken-2"})
      //  return
      // }  
      // fetch("http://localhost:3000/shippinginfo",{
      //   method:"post",
      //   headers:{
      //     "Content-Type":"application/json"
      //   },
      //   body:JSON.stringify({
      //     address,
      //     sector,
      //     city,
      //     phoneno:phonenumber
      //   })
      // }).then(res=>res.json())
      // .then(data=>{
      //  if(data.error){
      //   // M.toast({html: data.error, classes:"#d32f2f red darken-2"})
      //   M.toast({html: data.message, classes:"#43a047 green darken-1"})
      //   navigate("/payment");
      // }else{
      //   M.toast({html: data.message, classes:"#43a047 green darken-1"})
      //   navigate("/payment");
      // }
      // }).catch(err=>{
      //   console.log(err) 
      // })
    
    }
    
    
  

    

  return (
    <>
     <div className="mycard">
     <div className="card auth-card input-field ">
        <h2>Goodness</h2>
        <h4>Shipping Info</h4>
        <input type="text" placeholder="Address"
        value={address}
        onChange={(e)=>setAddress(e.target.value)} />

        <input type="text" placeholder="sector" 
         value={sector}
         onChange={(e)=>setSector(e.target.value)}/>

        <input type="text" placeholder="city"
         value={city}
         onChange={(e)=>setCity(e.target.value)}/>
        <input type="number" placeholder="Phone Number"
         value={phonenumber}
         onChange={(e)=>setPhonenumber(e.target.value)}
         />
        
           <button className="btn waves-effect #e65100 orange darken-4 btn-large" type="submit" name="action"
           onClick={()=>{PostData()}}  >
          Submit    </button>
        {/* <h5><Link to="/signin">Already have an Account ?</Link></h5> */}
      </div>
    </div>
    </>
  )
}

export default ShippingInfo
