// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
// 追加１
import { getDatabase, ref, push, set, onChildAdded, remove, onChildRemoved } 
from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

const firebaseConfig = {
apiKey: "AIzaSyAicGA_NSigVTMrYlF2Ox_fhVLs1s7V8rc",
authDomain: "js03-nakamura.firebaseapp.com",
projectId: "js03-nakamura",
storageBucket: "js03-nakamura.appspot.com",
messagingSenderId: "191200816809",
appId: "1:191200816809:web:11d4c1a3617f201d64c3b8"
};


    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

// 追加２

const db  = getDatabase(app); //RealtimeDBに接続
const dbRef = ref(db,"Asset management"); //RealtimeDB内の"chat"を使う