"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "top",
  data() {
    return {};
  },
  props: ["haed", "pan", "text", "color"],
  methods: {
    getBack() {
      common_vendor.index.navigateBack({
        delta: 1
      });
    },
    answer() {
      common_vendor.index.navigateBack({
        delta: 1
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($props.haed),
    b: $props.text ? 1 : "",
    c: $props.color ? 1 : "",
    d: common_vendor.o((...args) => $options.getBack && $options.getBack(...args)),
    e: common_vendor.o((...args) => $options.answer && $options.answer(...args)),
    f: common_vendor.n($props.pan ? "yc" : "")
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-bd67cea0"], ["__file", "C:/Users/\u6478\u6478\u54D2/Desktop/\u4EFF\u7F51\u6613\u4E91uniapp/music/components/top/top.vue"]]);
wx.createComponent(Component);
