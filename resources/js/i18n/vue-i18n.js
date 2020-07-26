import Vue from "vue";
import VueI18n from "vue-i18n";

import { locale as en } from "./en.js";
import { locale as ru } from "./ru.js";

Vue.use(VueI18n);

let messages = {};

messages = { ...messages, en, ru};
//get local storage language value 
const lang = localStorage.getItem("lang") || "en";

const i18n = new VueI18n({
    locale: lang, // set locale
    messages // set locale messages
  });
  
  export default i18n;