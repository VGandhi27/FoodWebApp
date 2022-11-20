import React from 'react'
import i3 from "../Image/i6.png";

const Offer = () => {
  return (
    <> <div className="offer">
    <div className="small-container">
            <div className="row">
               <center> <h1>Special Offer</h1></center>
                    <div className="col-2">
                             <center><img src={i3} alt="" className="offer-img" style={{width:"60%" }}/></center>
                    </div>
                    <div className="col-2">
                            <h4>Exclusively Available on My Goodness</h4>
                   <h1>  Amul Ice cream</h1>
                   <small>
                    Himalayan salt lamps are decorative lights you can buy for your home.They are carved out of pink Himalayan salt and believed to have various health benefits.
                    </small><br/>
                   <a href="" className="btn">By Now &#8594;</a>
                    </div>
            </div>
    </div>
</div></>
  )
}

export default Offer