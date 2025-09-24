// main.js
import { db } from './firebase.js';
import { collection, addDoc } from 'firebase/firestore';

const form = document.querySelector('.email-form');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = form.querySelector('input[type="email"]').value;

  try {
    await addDoc(collection(db, "emails"), {
      email,
      timestamp: Date.now()
    });
    alert("Thanks for signing up!");
    form.reset();
  } catch (err) {
    console.error("Error saving email:", err);
    alert("Something went wrong. Please try again.");
  }
});
