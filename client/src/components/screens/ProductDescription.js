import React from 'react'
import i3 from '../Image/i6.png'
const ProductDescription = () => {
  return (
    <>
    <div className="productDescription">
    <div className="card desc-card">
      <div className="card-image">
        <img src={i3} alt="" style={{height:"300px", width:"500px"}}/>
      </div>
       <div className="card-content">
       <i className="material-icons" style={{color:'red'}}>favorite</i>
        <h2>title</h2>
        <h3> &#8377; 150</h3>
        <button class="btn waves-effect #e65100 orange darken-4 btn-large" type="submit" name="action">Add to Cart
    <i class="material-icons right">send</i>
  </button>
        <input type="text" placeholder='add a comment' />
       </div>
      </div>
    </div>
    </>
  )
}

export default ProductDescription