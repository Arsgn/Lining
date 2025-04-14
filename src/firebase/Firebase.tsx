import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyBPF9R64YSC9bQyPjAjHmqJAPmhKSQleo4",
  authDomain: "li-ning-3e9ab.firebaseapp.com",
  projectId: "li-ning-3e9ab",
  storageBucket: "li-ning-3e9ab.firebasestorage.app",
  messagingSenderId: "826123435900",
  appId: "1:826123435900:web:71fa1798bd10f4248ceef9",
  measurementId: "G-R7PHL1NXWK",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
