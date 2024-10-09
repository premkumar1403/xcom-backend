
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCRo1C1nholrDN-U6SXx8nkSwi-3eQ4DRA",
  authDomain: "twitter-ce01d.firebaseapp.com",
  projectId: "twitter-ce01d",
  storageBucket: "twitter-ce01d.appspot.com",
  messagingSenderId: "737243404119",
  appId: "1:737243404119:web:b433de24d30280f92c1012",
  measurementId: "G-F82LVTTC2E",
};

const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export default app
// const analytics = getAnalytics(app);
