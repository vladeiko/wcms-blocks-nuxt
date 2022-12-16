import "./setup";

import { h } from "vue";
import App from "./main.vue";

export default defineComponent({
  setup() {
    return () => h(App);
  },
});
