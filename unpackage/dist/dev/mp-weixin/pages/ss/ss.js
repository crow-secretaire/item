"use strict";
var common_vendor = require("../../common/vendor.js");
var url_url = require("../../url/url.js");
const _sfc_main = {
  data() {
    return {
      inut: "",
      res: [],
      scehost: [],
      xs: 1,
      seoushuo: []
    };
  },
  methods: {
    gaibian(v) {
      this.inut = v;
    },
    scehosts(v) {
      if (v != "") {
        this.scehost.unshift(v);
        this.scehost = [...new Set(this.scehost)];
        if (this.scehost.length > 10) {
          this.scehost.length = 10;
        }
        common_vendor.index.setStorage({
          key: "scehost",
          data: this.scehost
        });
      }
      this.ss(v);
    },
    ss(v) {
      url_url.src(`/search?keywords=${v}`).then((data) => {
        console.log(data.data.result.songs);
        this.seoushuo = data.data.result.songs;
        this.xs = 2;
      });
    },
    deletes() {
      common_vendor.index.removeStorage({
        key: "scehost",
        success: (res) => {
          console.log(res);
          this.scehost = [];
        }
      });
    },
    tiaozhuan(v) {
      common_vendor.index.navigateTo({
        url: `/pages/gioca/gioca?id=${v}`
      });
    }
  },
  mounted() {
    url_url.src("/search/hot/detail").then((data) => {
      console.log(data.data.data);
      this.res = data.data.data;
    });
    common_vendor.index.getStorage({
      key: "scehost",
      success: (res) => {
        this.scehost = res.data;
      }
    });
  }
};
if (!Array) {
  const _easycom_top2 = common_vendor.resolveComponent("top");
  _easycom_top2();
}
const _easycom_top = () => "../../components/top/top.js";
if (!Math) {
  _easycom_top();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.p({
      haed: "\u641C\u7D22",
      text: true,
      color: "true"
    }),
    b: common_vendor.o(($event) => $options.scehosts($data.inut)),
    c: $data.inut,
    d: common_vendor.o(($event) => $data.inut = $event.detail.value),
    e: $data.xs === 2
  }, $data.xs === 2 ? {
    f: common_vendor.o(($event) => $data.xs = 1)
  } : {}, {
    g: $data.xs === 1
  }, $data.xs === 1 ? {
    h: common_vendor.o((...args) => $options.deletes && $options.deletes(...args)),
    i: common_vendor.f($data.scehost, (item, k0, i0) => {
      return {
        a: common_vendor.t(item),
        b: item,
        c: common_vendor.o(($event) => $options.gaibian(item))
      };
    }),
    j: common_vendor.f($data.res, (item, index, i0) => {
      return {
        a: common_vendor.t(index),
        b: common_vendor.t(item.searchWord),
        c: item.iconUrl !== null,
        d: item.iconUrl,
        e: common_vendor.t(item.content),
        f: common_vendor.t(item.score),
        g: item.id,
        h: common_vendor.o(($event) => $options.gaibian(item.searchWord), item.id)
      };
    })
  } : {}, {
    k: $data.xs === 2
  }, $data.xs === 2 ? {
    l: common_vendor.f($data.seoushuo, (item, k0, i0) => {
      return {
        a: common_vendor.t(item.name),
        b: common_vendor.t(item.artists[0].name),
        c: common_vendor.t(item.album.name),
        d: common_vendor.o(($event) => $options.tiaozhuan(item.id))
      };
    })
  } : {});
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-201d9046"], ["__file", "C:/Users/\u6478\u6478\u54D2/Desktop/\u4EFF\u7F51\u6613\u4E91uniapp/music/pages/ss/ss.vue"]]);
wx.createPage(MiniProgramPage);
