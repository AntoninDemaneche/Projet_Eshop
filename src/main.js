
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from "firebase/app";
import axios from "axios";
import 'firebase/firestore';
import { firestorePlugin } from 'vuefire'


Vue.use(firestorePlugin)
Vue.config.productionTip = false;
Vue.prototype.$axios = axios;


const firebaseConfig = {
  apiKey: "AIzaSyBD5pbdsDxWW-0GjIsHrVfo6fQECXplsv4",
  authDomain: "first-project-f5437.firebaseapp.com",
  databaseURL: "https://first-project-f5437.firebaseio.com",
  projectId: "first-project-f5437",
  storageBucket: "first-project-f5437.appspot.com",
  messagingSenderId: "105671811530",
  appId: "1:105671811530:web:1f6c3c0a1d4a36da5aef33"
};


firebase.initializeApp(firebaseConfig);
export let db = firebase.firestore();
let app;

firebase.auth().onAuthStateChanged(user => {
  console.log("user", user);
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
});



// app = new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount("#app");