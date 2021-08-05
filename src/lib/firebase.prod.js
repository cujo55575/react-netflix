import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyBpn4U_WuDn2Kbqu3rRijtDPYJdgOyYJq4",
  authDomain: "netflix-slint.firebaseapp.com",
  projectId: "netflix-slint",
  storageBucket: "netflix-slint.appspot.com",
  messagingSenderId: "527896359161",
  appId: "1:527896359161:web:1071119b240efcfb17f228",
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };
