import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueTextareaAutosize from "vue-textarea-autosize";
import firebase from "firebase/app";
import "firebase/firestore";

Vue.use(VueTextareaAutosize);

Vue.config.productionTip = false;

firebase.intitalizeApp({
  apiKey: "AIzaSyDNgPcfQAuRWRHoMvBAfEt5Gu_ZXQytDHk",
  authDomain: "vue-calendar-f98c4.firebaseapp.com",
  databaseURL: "https://vue-calendar-f98c4.firebaseio.com",
  projectId: "vue-calendar-f98c4",
  storageBucket: "vue-calendar-f98c4.appspot.com",
  messagingSenderId: "921981274709",
  appId: "1:921981274709:web:d05edb22acc0f70f1122dc",
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
