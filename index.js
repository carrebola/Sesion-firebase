console.log("Hello, World!");

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
import {
  getFirestore,
  doc,
  getDoc,
} from "https://www.gstatic.com/firebasejs/11.5.0/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEfhkgTNK4Br8JE1_Mwxn-EVFaIqrpeRU",
  authDomain: "ejemplo-daw12425.firebaseapp.com",
  projectId: "ejemplo-daw12425",
  storageBucket: "ejemplo-daw12425.firebasestorage.app",
  messagingSenderId: "335697938402",
  appId: "1:335697938402:web:31f707d895cabb5a389bbb",
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getDocument() {
  const docRef = doc(db, "usuarios", "ejemplo");
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
    displayData(docSnap.data());
  } else {
    console.log("No such document!");
  }
}

function displayData(data) {
  const container = document.getElementById("data-container");
  container.innerHTML = `
        <p><strong>Nombre:</strong> ${data.nombre}</p>
        <p><strong>Apellidos:</strong> ${data.apellidos}</p>
    `;
}

getDocument();
