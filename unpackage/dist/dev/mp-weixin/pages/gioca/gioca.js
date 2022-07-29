"use strict";
var common_vendor = require("../../common/vendor.js");
var url_url = require("../../url/url.js");
const _sfc_main = {
  data() {
    return {
      details: [],
      lyric: [],
      discuss: [],
      similarity: [],
      site: [],
      img: "",
      gc: 0,
      bgAudioManager: "",
      imge: false,
      a: 0,
      settiems: 0,
      gettiems: 0,
      xixix: 0,
      jjt: 0,
      sss: 0
    };
  },
  onLoad(v) {
    this.sss = v.id;
    this.gequ(v.id);
  },
  methods: {
    jdu(v) {
      console.log(this.site.size / 1e4);
      let aa = this.site.size / 1e4;
      console.log(1);
      let ds = setInterval(() => {
        if (this.imge == true) {
          clearInteval(ds);
        }
        this.jjt += 0.1;
      }, aa);
    },
    imgClick() {
      this.imge = !this.imge;
      if (!this.imge) {
        return this.bgAudioManager.play();
      }
      this.bgAudioManager.pause();
      this.fun();
      clearTimeout(this.ds);
    },
    fun() {
      if (this.imge == true) {
        return;
      }
      this.settiems = Date.now();
      let ayy = this.settiems - this.gettiems;
      let Nubb = 0;
      if (ayy - this.a < 1e5) {
        Nubb = (ayy - this.a) * -1;
      }
      let a = (this.lyric[this.gc + 1].tiem - this.lyric[this.gc].tiem) * 1e3 + this.xixix;
      this.xixix = Nubb;
      this.a = a;
      this.gettiems = Date.now();
      if (this.imge == true) {
        a = 0;
      }
      this.ds = setTimeout(() => {
        if (this.imge == true) {
          clearTimeout(this.ds);
          return;
        }
        this.gc++;
        this.fun();
      }, a);
    },
    qiehuan(v) {
      this.gc = 0;
      this.gequ(v);
      return this.bgAudioManager.stop();
    },
    s() {
      this.imge = false;
      this.gequ("1963423017");
    },
    x() {
      this.imge = false;
      this.gequ("1952928935");
    },
    gequ(v) {
      this.jjt = 0;
      url_url.src(`/song/detail?ids=${v}`).then((data) => {
        if (data.data.code === -460) {
          return alert(data.data.message);
        }
        this.details = data.data.songs[0];
        this.img = data.data.songs[0].al.picUrl;
      });
      url_url.src(`/lyric?id=${v}`).then((data) => {
        if (data.data.code === -460) {
          return alert(data.data.message);
        }
        let lyric = data.data.lrc.lyric;
        let r = /\[([^\]]+)\]([^\[]+)/g;
        let arr = [];
        lyric.replace(r, function($0, $1, $2) {
          let a = $1.split(":");
          let v2 = a[0] * 60 + (a[1] * 1).toFixed(3) * 1;
          arr.push({
            "tiem": v2,
            "lyric": $2
          });
        });
        this.lyric = arr;
        url_url.src(`/song/url?id=${v}`).then((data2) => {
          this.site = data2.data.data[0];
          console.log(data2.data.data[0]);
          this.bgAudioManager = common_vendor.index.getBackgroundAudioManager();
          this.bgAudioManager.title = this.details.name;
          this.bgAudioManager.src = data2.data.data[0].url;
          this.bgAudioManager.onPlay(() => {
            this.fun();
            this.jdu();
          });
          this.bgAudioManager.onEnded(() => {
            this.gequ(this.similarity[0].id);
          });
        });
      });
      url_url.src(`/comment/music?id=${v}`).then((data) => {
        this.discuss = data.data.comments;
      });
      url_url.src(`/simi/song?id=${v}`).then((data) => {
        this.similarity = data.data.songs;
      });
    }
  },
  computed: {
    sj() {
      const dateTime = this.discuss[0].time;
      let date = new Date(dateTime);
      let Y = date.getFullYear();
      let M = (date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1) + "-";
      let D = date.getDate();
      return Y + "-" + M + D + ":";
    }
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
  return {
    a: common_vendor.s(`background-image: url(${$data.img});`),
    b: common_vendor.p({
      haed: $data.details.name,
      text: true
    }),
    c: $data.img,
    d: common_vendor.n($data.imge ? "imge" : ""),
    e: common_vendor.f($data.lyric, (item, index, i0) => {
      return {
        a: common_vendor.t(item.lyric),
        b: common_vendor.n($data.gc === index ? "colo" : ""),
        c: item.id
      };
    }),
    f: common_vendor.s(`margin-top: ${$data.gc * -84 + 225}rpx;`),
    g: common_vendor.s(`left: ${$data.jjt}%`),
    h: common_vendor.o((...args) => $options.s && $options.s(...args)),
    i: common_vendor.o((...args) => $options.imgClick && $options.imgClick(...args)),
    j: $data.imge ? "../../static/\u64AD\u653E1.png" : "../../static/\u6682\u505C.png",
    k: common_vendor.o((...args) => $options.x && $options.x(...args)),
    l: common_vendor.f($data.similarity, (item, k0, i0) => {
      return {
        a: item.album.blurPicUrl,
        b: common_vendor.t(item.name),
        c: common_vendor.t(item.artists[0].name),
        d: item.id,
        e: common_vendor.o(($event) => $options.qiehuan(item.id), item.id)
      };
    }),
    m: common_vendor.f($data.discuss, (item, k0, i0) => {
      return {
        a: common_vendor.t(item.likedCount),
        b: item.user.avatarUrl,
        c: common_vendor.t(item.user.nickname),
        d: common_vendor.t(item.timeStr),
        e: common_vendor.t(item.content),
        f: item.id
      };
    }),
    n: common_vendor.t($options.sj)
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-cf4bb144"], ["__file", "C:/Users/\u6478\u6478\u54D2/Desktop/\u4EFF\u7F51\u6613\u4E91uniapp/music/pages/gioca/gioca.vue"]]);
wx.createPage(MiniProgramPage);
