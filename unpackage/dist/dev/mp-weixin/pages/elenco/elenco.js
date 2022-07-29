"use strict";
var url_url = require("../../url/url.js");
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      ming: []
    };
  },
  onLoad(v) {
    url_url.src(`/playlist/detail?id=${v.id}`).then((data) => {
      console.log(data.data.playlist);
      this.ming = data.data.playlist;
    });
  },
  methods: {
    fun() {
      console.log(this.ming.subscribedCount);
      if (this.ming.subscribedCount > 1e5) {
        return (this.ming.subscribedCount / 1e5).toFixed(1) + "\u4E07";
      }
    }
  },
  watch: {}
};
if (!Array) {
  const _easycom_top2 = common_vendor.resolveComponent("top");
  const _easycom_gequ2 = common_vendor.resolveComponent("gequ");
  (_easycom_top2 + _easycom_gequ2)();
}
const _easycom_top = () => "../../components/top/top.js";
const _easycom_gequ = () => "../../components/gequ/gequ.js";
if (!Math) {
  (_easycom_top + _easycom_gequ)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.s(`background-image: url(${$data.ming.coverImgUrl});`),
    b: common_vendor.p({
      haed: $data.ming.name,
      text: true
    }),
    c: common_vendor.t($options.fun()),
    d: $data.ming.coverImgUrl,
    e: common_vendor.t($data.ming.name),
    f: common_vendor.t($data.ming.description),
    g: common_vendor.t($data.ming.trackCount),
    h: common_vendor.p({
      name: $data.ming.tracks
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-bac80b74"], ["__file", "C:/Users/\u6478\u6478\u54D2/Desktop/\u4EFF\u7F51\u6613\u4E91uniapp/music/pages/elenco/elenco.vue"]]);
wx.createPage(MiniProgramPage);
