"use strict";
var common_vendor = require("../../common/vendor.js");
var url_url = require("../../url/url.js");
const _sfc_main = {
  data() {
    return {
      s: -1,
      g: -1,
      ges: []
    };
  },
  methods: {
    genre(v) {
      this.s = v;
      this.sjian();
    },
    singer(v) {
      this.g = v;
      this.sjian();
      console.log(this.ges);
    },
    sjian(e) {
      url_url.src(`/artist/list?type=${this.s}&area=${this.g}`).then((data) => {
        console.log(data);
        this.ges = data.data.artists;
      });
    },
    tiaoz(id, index) {
      common_vendor.index.navigateTo({
        url: `../list/list?id=${id}&type=${this.s}&area=${this.g}&index=${index}`
      });
    }
  },
  created() {
    this.sjian();
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.n($data.s === -1 ? "colr" : ""),
    b: common_vendor.o(($event) => $options.genre(-1)),
    c: common_vendor.n($data.s === 1 ? "colr" : ""),
    d: common_vendor.o(($event) => $options.genre(1)),
    e: common_vendor.n($data.s === 2 ? "colr" : ""),
    f: common_vendor.o(($event) => $options.genre(2)),
    g: common_vendor.n($data.s === 3 ? "colr" : ""),
    h: common_vendor.o(($event) => $options.genre(3)),
    i: common_vendor.n($data.g === -1 ? "colr" : ""),
    j: common_vendor.o(($event) => $options.singer(-1)),
    k: common_vendor.n($data.g === 7 ? "colr" : ""),
    l: common_vendor.o(($event) => $options.singer(7)),
    m: common_vendor.n($data.g === 96 ? "colr" : ""),
    n: common_vendor.o(($event) => $options.singer(96)),
    o: common_vendor.n($data.g === 8 ? "colr" : ""),
    p: common_vendor.o(($event) => $options.singer(8)),
    q: common_vendor.n($data.g === 16 ? "colr" : ""),
    r: common_vendor.o(($event) => $options.singer(16)),
    s: common_vendor.n($data.g === 0 ? "colr" : ""),
    t: common_vendor.o(($event) => $options.singer(0)),
    v: common_vendor.f($data.ges, (item, index, i0) => {
      return {
        a: item.img1v1Url,
        b: common_vendor.t(item.name),
        c: common_vendor.o(($event) => $options.tiaoz(item.id, index))
      };
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-390a77b4"], ["__file", "C:/Users/\u6478\u6478\u54D2/Desktop/\u4EFF\u7F51\u6613\u4E91uniapp/music/pages/person/person.vue"]]);
wx.createPage(MiniProgramPage);
