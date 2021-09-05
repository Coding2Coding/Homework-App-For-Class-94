//var zz = localStorage.getItem("username");
//document.getElementById("welcomeUsername").innerHTML=zz;

const firebaseConfig = {
    apiKey: "AIzaSyDY4bRBIlPJZOzvoMVwx9JbxRhKSIAQwcg",
    authDomain: "homework-app-for-class-93---97.firebaseapp.com",
    databaseURL: "https://homework-app-for-class-93---97-default-rtdb.firebaseio.com",
    projectId: "homework-app-for-class-93---97",
    storageBucket: "homework-app-for-class-93---97.appspot.com",
    messagingSenderId: "283346615738",
    appId: "1:283346615738:web:c15482b146bce933283183",
    measurementId: "G-CJPPFMXKYY"
  };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);