import { Auth0Provider } from "@auth0/auth0-react";
import React, { createContext, useContext, useEffect, useReducer } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Cart from "./components/screens/Cart";
import CreatePost from "./components/screens/CreatePost";
import Footer from "./components/screens/Footer";
import Home from "./components/screens/Home";
import MainCom from "./components/screens/MainCom";
import Offer from "./components/screens/Offer";
import Product from "./components/screens/Product";
import ProductDescription from "./components/screens/ProductDescription";
import Profile from "./components/screens/Profile";
import SignIn from "./components/screens/SignIn";
import SignUp from "./components/screens/SignUp";
import UserProfile from "./components/screens/UserProfile";
import { initialState, reducer } from "./reducers/userReducer";

export const UserContext = createContext();

const Routing = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { state, dispatch } = useContext(UserContext);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user);
    if (user) {
      dispatch({ type: "USER", payload: user });
    } else {
      if (!location.pathname.startsWith("/reset")) {
        navigate("/signin");
      }
    }
  }, [dispatch, location.pathname, navigate]);

  return null; // Return null or a placeholder if Routing doesn't render anything
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Auth0Provider
      domain="dev-20gly8u4jsygu8lv.us.auth0.com" //CHANGE IT WITH YOUR DOMAIN ID
      clientId="uuyHcNsAt5dibUJUf6egnrW2BQSk7lki" //CHANGE IT WITH YOUR CLIENT ID
      authorizationParams={{
        redirect_uri: "http://localhost:5173/",
      }}
      audience="http://localhost:8000"
      scope="openid profile email"
    >
      <UserContext.Provider value={{ state, dispatch }}>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Navbar />
                  <Routing />
                </>
              }
            >
              <Route
                index
                element={
                  <>
                    <MainCom />
                    <Home />
                    <Offer />
                    <Footer />
                  </>
                }
              />
              <Route
                path="home"
                element={
                  <>
                    <MainCom />
                    <Home />
                    <Offer />
                    <Footer />
                  </>
                }
              />
              <Route
                path="signin"
                element={
                  <>
                    <MainCom />
                    <SignIn />
                  </>
                }
              />
              <Route
                path="signup"
                element={
                  <>
                    <MainCom />
                    <SignUp />
                  </>
                }
              />
              <Route
                exact
                path="profile"
                element={
                  <>
                    <Profile />
                  </>
                }
              />
              <Route
                path="productdescription/:postid"
                element={
                  <>
                    <ProductDescription />
                  </>
                }
              />
              <Route
                path="createpost"
                element={
                  <>
                    <CreatePost />
                  </>
                }
              />
              <Route
                path="product"
                element={
                  <>
                    <Product />
                    <Footer />
                  </>
                }
              />
              <Route
                path="offer"
                element={
                  <>
                    <Offer />
                  </>
                }
              />
              <Route
                path="Footer"
                element={
                  <>
                    <Footer />
                  </>
                }
              />
              <Route
                path="Cart"
                element={
                  <>
                    <Cart />
                  </>
                }
              />
              <Route
                path="profile/:userid"
                element={
                  <>
                    <UserProfile />
                  </>
                }
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </Auth0Provider>
  );
}

export default App;
