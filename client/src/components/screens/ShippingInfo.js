import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import M from 'materialize-css'
import {useNavigate} from 'react-router-dom'

const ShippingInfo = () => {
    let navigate =useNavigate();
    const [address,setAddress] = useState("")
      const [sector,setSector] = useState("")
      const [phonenumber,setPhonenumber] = useState("")
      const [city,setCity] = useState("")
      const PostData =()=>{
        //  if(url){}
          fetch("/shipping",{
              method:"post",
              headers:{
                  "Content-Type":"application/json",
                  "Authorization":"Bearer "+localStorage.getItem("jwt")
              },
              body:JSON.stringify({
                  address,
                  city,
                  sector,
                  phonenumber
              })
          }).then(res=>res.json())
          .then(data=>{
            console.log(data)
           if(data.error){
            M.toast({html: data.error, classes:"#d32f2f red darken-2"})
            }else{
        
              M.toast({html: "Signed In success", classes:"#43a047 green darken-1"})
            navigate("/");
          }
          }).catch(err=>{
            console.log(err) 
          })
        
       
        }

      const postDetails = ()=>{
        const data = new FormData()
        fetch("/shipping",{
            method:"post",
            body:data
        })
        .then(res=>res.json())
        .then(data=>{
           data(data.url)
        })
        .catch(err=>{
            console.log(err)
        })
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
        <Link to="/payment">
           <button className="btn waves-effect #e65100 orange darken-4 btn-large" type="submit" name="action"
           onClick={()=>{PostData()}}  >
          Submit    </button></Link>
        {/* <h5><Link to="/signin">Already have an Account ?</Link></h5> */}
      </div>
    </div>
    </>
  )
}

export default ShippingInfo
