import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import BaseBottomItem from "./components/base/BaseBottomItem";

const app = createApp(App);
app.component(BaseBottomItem);
app.use(store);

app.mount("#app");
