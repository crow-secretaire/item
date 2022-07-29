"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "search",
  data() {
    return {};
  },
  methods: {
    tz() {
      common_vendor.index.navigateTo({
        url: "../../pages/ss/ss"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.tz && $options.tz(...args))
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-eb1fb978"], ["__file", "C:/Users/\u6478\u6478\u54D2/Desktop/\u4EFF\u7F51\u6613\u4E91uniapp/music/components/search/search.vue"]]);
wx.createComponent(Component);
