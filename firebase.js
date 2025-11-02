// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyC7Cf9PdpxlItswpuXBlxDL9BIv4HHP_A0",
  authDomain: "travel-explorer-c90b6.firebaseapp.com",
  projectId: "travel-explorer-c90b6",
  storageBucket: "travel-explorer-c90b6.appspot.com",  // ✅ FIXED
  messagingSenderId: "416945961638",
  appId: "1:416945961638:web:a1598d52106c1527889267"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Initialize Auth
const auth = getAuth(app);

// ✅ Export Auth for use in signup/login pages
export { auth };
