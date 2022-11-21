import React,{useContext,useRef,useEffect,useState} from 'react'
import { Outlet, Link,useNavigate } from "react-router-dom";
import { UserContext} from '../App'
import M from 'materialize-css'
const Navbar=()=> {
  const  searchModal = useRef(null)
    const [search,setSearch] = useState('')
    
  const {state,dispatch}=useContext(UserContext)
const navigate=useNavigate();

useEffect(()=>{
  M.Modal.init(searchModal.current)
},[])
  const renderList=()=>{
    if(state){
    return[
      <li key='1'>
         <i data-target="modal1" className="material-icons blue-text text-darken-2 modal-trigger">search</i>
    </li>,<li key='2'><Link to="/profile">Profile</Link></li>,
      <li key='3'><Link to="/createpost">Create Post</Link></li>,
      <li key='4'>
          <button className="btn #c62828 red darken-3"
         onClick={()=>{
           localStorage.clear()
           dispatch({type:"CLEAR"})
           navigate('/signin')
         }}
         >Logout
         </button>
       </li>

    ]
    }
    else
    {
 
      return[
        <li key='5'><Link to="/signin">SignIn</Link></li>,
        <li key='6'><Link to="/signup">SignUp</Link></li>
       
      ]
    }
  }
  return (
    <>
    <nav>
    <div className="nav-wrapper white " >
      <Link to={state?"/":"signin"} className="brand-logo left">Goodness</Link>
      <ul id="nav-mobile" className="right">

       {renderList()}
      </ul>
    </div>
    <div id="modal1" className="modal"ref={searchModal} style={{color:"black"}}>
    <div className="modal-content">
    <input
            type="text"
            placeholder="search food"
            value={search}
            // onChange={(e)=>fetchUsers(e.target.value)}
            />
            <ul className="collection">
               {/* {userDetails.map(item=>{
                 return <Link to={item._id !== state._id ? "/profile/"+item._id:'/profile'} onClick={()=>{
                   M.Modal.getInstance(searchModal.current).close()
                   setSearch('')
                 }}><li className="collection-item">{item.email}</li></Link> 
               })} */}
               
              </ul>
    </div>
    <div className="modal-footer">
      <button  className="modal-close waves-effect waves-green btn-flat">Agree</button>
    </div>
  </div>
          
  </nav>
  <Outlet />
    </>
  )
}
export default Navbar