import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { db } from './firebase.js';
import { collection, getDocs } from "firebase/firestore";

const auth = getAuth();
const dealList = document.querySelector('.deal-list');
const logoutBtn = document.getElementById('logout');

// 🔐 Check if user is signed in
onAuthStateChanged(auth, async (user) => {
  if (!user) {
    window.location.href = "/index.html"; // Redirect if not logged in
    return;
  }

  // ✅ Load deals from Firestore
  const querySnapshot = await getDocs(collection(db, "deals"));
  querySnapshot.forEach((doc) => {
    const deal = doc.data();
    const card = document.createElement('div');
    card.className = 'deal-card';
    card.innerHTML = `
      <img src="${deal.imageUrl}" alt="${deal.title}" />
      <h3>${deal.title}</h3>
      <p>Store Price: $${deal.storePrice.toFixed(2)}</p>
      <p>Manufacturer Coupon: -$${deal.manufacturerCoupon.toFixed(2)}</p>
      <p>Store Coupon: -$${deal.storeCoupon.toFixed(2)}</p>
      <p><strong>Final Price: $${(deal.storePrice - deal.manufacturerCoupon - deal.storeCoupon).toFixed(2)}</strong></p>
      <p class="policy">${deal.policyNotes}</p>
    `;
    dealList.appendChild(card);
  });
});

// 🚪 Logout button
logoutBtn.addEventListener('click', () => {
  signOut(auth).then(() => {
    window.location.href = "/index.html";
  });
});
