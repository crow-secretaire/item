"use strict";
var common_vendor = require("../../common/vendor.js");
var url_url = require("../../url/url.js");
const _sfc_main = {
  data() {
    return {
      title: false,
      bangd: [],
      lunbo: []
    };
  },
  onLoad() {
  },
  methods: {
    tiaoz(v) {
      common_vendor.index.navigateTo({
        url: `../elenco/elenco?id=${v}`
      });
    }
  },
  created() {
    url_url.src("/toplist/detail").then((data) => {
      for (var i = 0; i < 4; i++) {
        data.data.list[i];
        this.bangd.push(data.data.list[i]);
      }
    });
    url_url.src("/banner").then((data) => {
      this.lunbo = data.data.banners;
    });
  }
};
if (!Array) {
  const _easycom_search2 = common_vendor.resolveComponent("search");
  _easycom_search2();
}
const _easycom_search = () => "../../components/search/search.js";
if (!Math) {
  _easycom_search();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.lunbo, (item, k0, i0) => {
      return {
        a: item.imageUrl,
        b: item.id
      };
    }),
    b: common_vendor.f($data.bangd, (item, k0, i0) => {
      return {
        a: item.coverImgUrl,
        b: common_vendor.f(item.tracks, (itte, valu, i1) => {
          return {
            a: common_vendor.t(valu),
            b: common_vendor.t(itte.first),
            c: common_vendor.t(itte.second),
            d: itte.id
          };
        }),
        c: item.id,
        d: common_vendor.o(($event) => $options.tiaoz(item.id), item.id)
      };
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-57280228"], ["__file", "C:/Users/\u6478\u6478\u54D2/Desktop/\u4EFF\u7F51\u6613\u4E91uniapp/music/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
