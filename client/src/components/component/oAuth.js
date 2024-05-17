import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
// import { app } from "../../firebase.js";
import { app } from "../../firebase";
// import firebaseConfig from "../../firebase.js";
// E:\GSSoC 2024\FoodWebApp\client\src\firebase.js
// import { useDispatch } from "react-redux";
// import { signInSuccess } from "../redux/user/userSlice";
// import { useNavigate } from "react-router-dom";

function OAuth() {
  // const dispatch = useDispatch();
  //   const navigate = useNavigate();

  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);

      const result = await signInWithPopup(auth, provider);
      // const res = await fetch("/server/auth/google", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({
      //     name: result.user.displayName,
      //     email: result.user.email,
      //     photo: result.user.photoURL,
      //   }),
      // });
      //       const data = await res.json();
      //       dispatch(signInSuccess(data));
      //       navigate("/");
      console.log(result);
    } catch (error) {
      console.log("could not sign in with google", error);
    }
  };

  return (
    <button
      onClick={handleGoogleClick}
      type="button"
      className="bg-red-700 text-white p-3 rounded-lg uppercase hover:opacity-95"
    >
      Continue with google
    </button>
  );
}

export default OAuth;
