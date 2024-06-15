import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_FIREBASE_APP_ID,
  apiKey: "AIzaSyCI6Lc32xlOl4IA7ApkZ_1V1QrpRMm2SDQ",
  authDomain: "auth-test-6360c.firebaseapp.com",
  projectId: "auth-test-6360c",
  storageBucket: "auth-test-6360c.appspot.com",
  messagingSenderId: "210371367557",
  appId: "1:210371367557:web:ec1fcca3a6f97a6a40cfec",
};
// console.log(firebaseConfig);

const App = initializeApp(firebaseConfig);
export const auth = getAuth(App);
export default App;
