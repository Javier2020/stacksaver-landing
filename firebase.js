import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // ✅ Add this
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCO7vxCrIkTPY1Y-2iU84ZfW7D7tT-Sthk",
  authDomain: "stacksaver-b3b79.firebaseapp.com",
  projectId: "stacksaver-b3b79",
  storageBucket: "stacksaver-b3b79.firebasestorage.app",
  messagingSenderId: "800774118759",
  appId: "1:800774118759:web:8341e3d3e32f9b4b3863c2",
  measurementId: "G-EE4MXJ9KNL"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); // ✅ Export Firestore
const analytics = getAnalytics(app);
