import { createApp } from "vue";
import { Quasar } from "quasar";
import quasarIconSet from "quasar/icon-set/svg-mdi-v6";

// Import icon libraries
import '@quasar/extras/roboto-font-latin-ext/roboto-font-latin-ext.css'
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/material-icons-outlined/material-icons-outlined.css'
import '@quasar/extras/material-icons-round/material-icons-round.css'
import '@quasar/extras/material-icons-sharp/material-icons-sharp.css'
import '@quasar/extras/mdi-v6/mdi-v6.css'

// A few examples for animations from Animate.css:
import "@quasar/extras/animate/fadeIn.css";
import "@quasar/extras/animate/fadeOut.css";
import "@quasar/extras/animate/bounce.css";

// Import Quasar css
import "quasar/src/css/index.sass";

// Assumes your root component is App.vue and placed in same folder as main.js
import App from "./App.vue";

// ROUTER:
import  router  from './router' 

const myApp = createApp(App);

myApp.use(router);

myApp.use(
  Quasar, {
    plugins: {}, // import Quasar plugins and add here
    iconSet: quasarIconSet
    /*
    config: {
      brand: {
        // primary: '#e46262',
        // ... or all other brand colors
      },
      notify: {...}, // default set of options for Notify Quasar plugin
      loading: {...}, // default set of options for Loading Quasar plugin
      loadingBar: { ... }, // settings for LoadingBar Quasar plugin
      // ..and many more (check Installation card on each Quasar component/directive/plugin)
    }
    */
  }
);

// Assumes you have a <div id="app"></div> in your index.html
myApp.mount("#app");
