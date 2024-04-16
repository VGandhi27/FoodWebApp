import { useAuth0 } from "@auth0/auth0-react";
import M from "materialize-css";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { UserContext } from "../App";

const Navbar = () => {
  const searchModal = useRef(null);
  const [search, setSearch] = useState("");
  const [userDetails, setUserDetails] = useState([]);
  const { state, dispatch } = useContext(UserContext);
  const navigate = useNavigate();
  const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();

  useEffect(() => {
    M.Modal.init(searchModal.current);
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    dispatch({ type: "CLEAR" });
    logout({ returnTo: window.location.origin });
  };

  const handleSearch = (query) => {
    setSearch(query);
    fetch("/search-posts", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
      }),
    })
      .then((res) => res.json())
      .then((results) => {
        setUserDetails(results.user);
      });
  };

  const renderList = () => {
    if (isAuthenticated) {
      return (
        <>
          <li>
            <i
              data-target="modal1"
              className="material-icons blue-text text-darken-2 modal-trigger"
            >
              search
            </i>
          </li>
          <li>
            <Link to="/profile">
              <i className="material-icons blue-text text-darken-2 modal-trigger">
                person
              </i>
            </Link>
          </li>
          <li>
            <Link to="/cart">
              <i className="material-icons blue-text text-darken-2 modal-trigger">
                shopping_cart
              </i>
            </Link>
          </li>
          <li>
            <Link to="/product">All Products</Link>
          </li>
          <li>
            <button className="btn #c62828 red darken-3" onClick={handleLogout}>
              Logout
            </button>
          </li>
        </>
      );
    } else {
      return (
        <li>
          <button className="button" onClick={loginWithRedirect}>
            Login
          </button>
        </li>
      );
    }
  };

  return (
    <>
      <nav>
        <div className="nav-wrapper white">
          <Link to={state ? "/" : "/signin"} className="brand-logo left">
            Goodness
          </Link>
          <ul id="nav-mobile" className="right">
            {renderList()}
          </ul>
        </div>

        <div
          id="modal1"
          className="modal"
          ref={searchModal}
          style={{ color: "black" }}
        >
          <div className="modal-content">
            <input
              type="text"
              placeholder="search food "
              value={search}
              onChange={(e) => handleSearch(e.target.value)}
            />
            <ul className="collection">
              {userDetails.map((item) => (
                <Link
                  to={"/productdescription/" + item._id}
                  key={item._id}
                  onClick={() => {
                    M.Modal.getInstance(searchModal.current).close();
                    setSearch("");
                  }}
                >
                  <li className="collection-item">{item.title}</li>
                </Link>
              ))}
            </ul>
          </div>
          <div className="modal-footer">
            <button
              className="modal-close waves-effect waves-green btn-flat"
              onClick={() => setSearch("")}
            >
              Close
            </button>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
