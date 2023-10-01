
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyDj6kOd_SrL3Nar6bTeUsjkW1P35vGKmcY",
  authDomain: "taskdistinctonfindquestion.firebaseapp.com",
  projectId: "taskdistinctonfindquestion",
  storageBucket: "taskdistinctonfindquestion.appspot.com",
  messagingSenderId: "904680349615",
  appId: "1:904680349615:web:b8f1ab62a308fa14c5595a",
  measurementId: "G-ZXJ805JJ3F"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


