import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { db } from './firebase.js';
import { doc, setDoc, getDoc } from "firebase/firestore";

const auth = getAuth();

const form = document.querySelector('.email-form');
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = form.querySelector('input[type="email"]').value;

  try {
    // Try to sign in
    await signInWithEmailAndPassword(auth, email, "defaultPassword");
  } catch {
    // If user doesn't exist, create account
    await createUserWithEmailAndPassword(auth, email, "defaultPassword");
    const trialStart = Date.now();
    const trialExpires = trialStart + 7 * 24 * 60 * 60 * 1000;
    await setDoc(doc(db, "users", email), { trialStart, trialExpires });
  }
});

onAuthStateChanged(auth, async (user) => {
  if (user) {
    const ref = doc(db, "users", user.email);
    const snap = await getDoc(ref);
    const trialExpires = snap.data().trialExpires;

    if (Date.now() < trialExpires) {
      window.location.href = "/home.html";
    } else {
      window.location.href = "/upgrade.html";
    }
  }
});

