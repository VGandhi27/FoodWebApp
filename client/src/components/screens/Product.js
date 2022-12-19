import React from "react";
import {useState,useEffect,useContext}from 'react'
import {UserContext} from '../../App'
import { Link} from 'react-router-dom'

const Product = () => {
    const [data,setData]=useState([])
   const {state,dispatch}=useContext(UserContext)
   useEffect(()=>{
    fetch('/allpost',{
      headers:{
        "Authorization":"Bearer "+localStorage.getItem("jwt")
      }
    }).then(res=>res.json())
    .then(result=>{
      console.log(result)
      setData(result.posts)
     })
   },[])
  return (
    <>
      <div className="container">
        <div className="row">{
        data.map(item=>{
            return(
                <div className="col-sm-4" key={item._id}>
                <div className="card" style={{ width: "15rem;" }}>
                  <img src={item.photo} className="card-img-top" alt="..." style={{width:"100px;"}} />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">
                    &#8377; {item.body}
                    </p>
                    <Link to={ "/productdescription/"+item._id} >
          <button className="btn waves-effect #e65100 orange darken-4 btn-small" type="submit" name="action">More Details
             </button>
          </Link>
                    {/* <a href="#" className="btn btn-primary btn-sm">
                      Price:{item.body}
                    </a> */}
                  </div>
                </div>
              </div>
            )
        })
    }
        </div>
      </div>
    </>
  );
};

export default Product;
