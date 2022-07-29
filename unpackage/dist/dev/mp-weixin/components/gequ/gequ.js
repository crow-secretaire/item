"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "gequ",
  data() {
    return {};
  },
  methods: {
    tz(v) {
      common_vendor.index.navigateTo({
        url: `/pages/gioca/gioca?id=${v}`
      });
    }
  },
  props: ["name"]
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($props.name, (item, index, i0) => {
      return {
        a: common_vendor.t(index + 1),
        b: common_vendor.t(item.name),
        c: common_vendor.t(item.alia[0] || item.ar[0].name),
        d: item.id,
        e: common_vendor.o(($event) => $options.tz(item.id), item.id)
      };
    })
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-6cd147c4"], ["__file", "C:/Users/\u6478\u6478\u54D2/Desktop/\u4EFF\u7F51\u6613\u4E91uniapp/music/components/gequ/gequ.vue"]]);
wx.createComponent(Component);
