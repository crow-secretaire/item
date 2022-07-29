"use strict";
var url_url = require("../../url/url.js");
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      name: [],
      m: "",
      url: "",
      ges: []
    };
  },
  onLoad(v) {
    console.log(v.url);
    this.url = v.url;
    url_url.src(`/artist/songs?id=${v.id}`).then((data) => {
      console.log(data.data.songs);
      this.name = data.data.songs;
      this.m = data.data.songs[0].ar[0].name;
    });
    url_url.src(`/artist/list?type=${v.type}&area=${v.area}`).then((data) => {
      console.log(data.data.artists[v.index]);
      this.ges = data.data.artists[v.index];
    });
  },
  methods: {},
  created() {
    console.log(1);
  }
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
    a: common_vendor.p({
      haed: $data.m
    }),
    b: $data.ges.img1v1Url,
    c: common_vendor.t($data.name.length),
    d: common_vendor.p({
      name: $data.name
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-7d5e07c6"], ["__file", "C:/Users/\u6478\u6478\u54D2/Desktop/\u4EFF\u7F51\u6613\u4E91uniapp/music/pages/list/list.vue"]]);
wx.createPage(MiniProgramPage);
