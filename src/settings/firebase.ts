import constants from "../constants/firebase";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: constants.apiKey,
  authDomain: "gf-anjos.firebaseapp.com",
  projectId: "gf-anjos",
  storageBucket: "gf-anjos.appspot.com",
  messagingSenderId: "639964982619",
  appId: constants.appId,
  measurementId: "G-79603LC8R1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

export default app;
