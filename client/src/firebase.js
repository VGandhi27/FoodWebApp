// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  apiKey: "AIzaSyCGkkB7rGKFvNp42_zKq2EI74u9fsx_FQ8",

  authDomain: "gssoc-food-delivery.firebaseapp.com",
  projectId: "gssoc-food-delivery",
  storageBucket: "gssoc-food-delivery.appspot.com",
  messagingSenderId: "418399418968",
  appId: "1:418399418968:web:d6af5cd109d5aac363a82d",
};

// export default firebaseConfig;

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
