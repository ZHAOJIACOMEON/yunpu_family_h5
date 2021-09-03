import Vue from "vue"
import App from "./App.vue"
import "../src/assets/css/normalize.css"
import "amfe-flexible"
import VeLine from "v-charts-v2/lib/line"
import router from "./router"
import "vant/lib/col/style/index"
import "vant/lib/row/style/index"
import "vant/lib/icon/style/index"
import "vant/lib/button/style/index"
import { Col, Row, Icon, Button } from "vant"
import api from "@/mock/interfaceMap";
// import api from "@/api/interfaceMap";

Vue.component(VeLine.name, VeLine)

Vue.use(Col);
Vue.use(Row);
Vue.use(Icon);
Vue.use(Button);

Vue.config.productionTip = false
Vue.prototype.$api = api

new Vue({
  router,
  render: h => h(App)
}).$mount("#app")
