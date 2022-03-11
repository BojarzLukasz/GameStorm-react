import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
        apiKey: "AIzaSyDCuzNjiCznmPotzd7gffGJ_mNco-ZAsR0",
        authDomain: "gamestore-production.firebaseapp.com",
        projectId: "gamestore-production",
        storageBucket: "gamestore-production.appspot.com",
        messagingSenderId: "359511330446",
        appId: "1:359511330446:web:32fad91f2d237a68e203df"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
