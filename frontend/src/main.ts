import Toast, { PluginOptions } from "vue-toastification";
import { createApp, h } from "vue";
import { createPinia } from "pinia";

// apollo config
import {
  ApolloClient,
  ApolloLink,
  InMemoryCache,
  from,
  HttpLink,
} from "@apollo/client/core"; // need to import it from the core to avoid 'react not installed' error
import { provideApolloClient } from "@vue/apollo-composable";
// vue app config
import App from "./App.vue";
import router from "./router";
// App CSS | Plugin Css & Others
import "@/assets/css/index.scss";
import "vue-toastification/dist/index.css";

import { useAuthStore } from "@/store/auth";

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $toast: typeof Toast;
  }
}
// Get the token from Localstorage
const token = localStorage.getItem("token");

const additiveLink = from([
  new ApolloLink((operation, forward) => {
    operation.setContext(({ headers }: any) => ({
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : null,
      },
    }));
    return forward(operation); // Go to the next link in the chain. Similar to `next` in Express.js middleware.
  }),
  new HttpLink({ uri: "http://localhost:3000/graphql" }),
]);

// Start apollo server instance with memory cache to avoid repetition of query spam
const apolloClient = new ApolloClient({
  link: additiveLink,
  cache: new InMemoryCache(),
});
// Start VueApp
const app = createApp({
  setup() {
    provideApolloClient(apolloClient);
  },
  render: () => h(App),
});

// Toast configuration
const options: PluginOptions = {
  // TODO : Custom Toast configuration if needed
};
app.use(Toast, options);

// Router configuration
app.use(router);

// Store configuration
app.use(createPinia());

const auth = useAuthStore();
if (token) {
  auth.login(token);
  console.log("AUTH SUCCESS AT INIT");
}
// Finaly mount the app
app.mount("#app");
