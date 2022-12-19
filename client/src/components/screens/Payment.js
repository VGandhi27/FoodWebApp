import React,{useState} from 'react'
import M from 'materialize-css'

const Payment = () => {
    const [cardno,setCardno] = useState("")
    const [time,setTime] = useState("")
    const [cv,setCv] = useState("")
  
  return (
    <div>
       <div className="mycard">
     <div className="card auth-card input-field ">
        <h2>Goodness</h2>
        <h4>Card Info</h4>
        <input type="text" placeholder="Enter the Card Number"
        value={cardno}
        onChange={(e)=>setCardno(e.target.value)} />

        <input type="text" placeholder="MM/YY" 
         value={time}
         onChange={(e)=>setTime(e.target.value)}/>

        <input type="number" placeholder="CV"
         value={cv}
         onChange={(e)=>setCv(e.target.value)}/>
        
        <button className="btn waves-effect waves-light #64b5f6 blue darken-1"
        onClick={ M.toast({html:"Payment Accepted and Order Placed",classes:"#43a047 green darken-1"})
      }
        >Submit
        </button>
        {/* <h5><Link to="/signin">Already have an Account ?</Link></h5> */}
      </div>
    </div>
   
    </div>
  )
}

export default Payment
