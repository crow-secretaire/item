"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports[Symbol.toStringTag] = "Module";
var common_vendor = require("./common/vendor.js");
if (!Math) {
  "./pages/index/index.js";
  "./pages/use/use.js";
  "./pages/list/list.js";
  "./pages/name/name.js";
  "./pages/person/person.js";
  "./pages/elenco/elenco.js";
  "./pages/gioca/gioca.js";
  "./pages/ss/ss.js";
}
const _sfc_main = {
  onLaunch: function() {
    console.log("App Launch");
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
var App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/\u6478\u6478\u54D2/Desktop/\u4EFF\u7F51\u6613\u4E91uniapp/music/App.vue"]]);
function createApp() {
  const app = common_vendor.createSSRApp(App);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
