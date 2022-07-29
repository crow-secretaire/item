if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then((value) => promise.resolve(callback()).then(() => value), (reason) => promise.resolve(callback()).then(() => {
      throw reason;
    }));
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue, shared) {
  "use strict";
  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$b = {
    name: "search",
    data() {
      return {};
    },
    methods: {
      tz() {
        uni.navigateTo({
          url: "../../pages/ss/ss"
        });
      }
    }
  };
  function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode("view", { class: "sr" }, [
        vue.createElementVNode("view", { class: "mage" }, [
          vue.createElementVNode("image", {
            src: "/static/\u653E\u5927\u955C.png",
            mode: ""
          })
        ]),
        vue.createElementVNode("input", {
          type: "text",
          placeholder: "\u641C\u7D22\u6B4C\u66F2",
          onClick: _cache[0] || (_cache[0] = (...args) => $options.tz && $options.tz(...args))
        })
      ])
    ]);
  }
  var __easycom_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$a], ["__scopeId", "data-v-eb1fb978"], ["__file", "C:/Users/\u6478\u6478\u54D2/Desktop/\u4EFF\u7F51\u6613\u4E91uniapp/music/components/search/search.vue"]]);
  function isDebugMode() {
    return typeof __channelId__ === "string" && __channelId__;
  }
  function jsonStringifyReplacer(k, p) {
    switch (shared.toRawType(p)) {
      case "Function":
        return "function() { [native code] }";
      default:
        return p;
    }
  }
  function normalizeLog(type, filename, args) {
    if (isDebugMode()) {
      args.push(filename.replace("at ", "uni-app:///"));
      return console[type].apply(console, args);
    }
    const msgs = args.map(function(v) {
      const type2 = shared.toTypeString(v).toLowerCase();
      if (["[object object]", "[object array]", "[object module]"].indexOf(type2) !== -1) {
        try {
          v = "---BEGIN:JSON---" + JSON.stringify(v, jsonStringifyReplacer) + "---END:JSON---";
        } catch (e) {
          v = type2;
        }
      } else {
        if (v === null) {
          v = "---NULL---";
        } else if (v === void 0) {
          v = "---UNDEFINED---";
        } else {
          const vType = shared.toRawType(v).toUpperCase();
          if (vType === "NUMBER" || vType === "BOOLEAN") {
            v = "---BEGIN:" + vType + "---" + v + "---END:" + vType + "---";
          } else {
            v = String(v);
          }
        }
      }
      return v;
    });
    return msgs.join("---COMMA---") + " " + filename;
  }
  function formatAppLog(type, filename, ...args) {
    const res = normalizeLog(type, filename, args);
    res && console[type](res);
  }
  function resolveEasycom(component, easycom) {
    return shared.isString(component) ? easycom : component;
  }
  const dz = "http://127.0.0.1:3000";
  const src = async (d) => {
    return await uni.request({
      url: dz + d
    });
  };
  const _sfc_main$a = {
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
        uni.navigateTo({
          url: `../elenco/elenco?id=${v}`
        });
      }
    },
    created() {
      src("/toplist/detail").then((data) => {
        for (var i = 0; i < 4; i++) {
          data.data.list[i];
          this.bangd.push(data.data.list[i]);
        }
      });
      src("/banner").then((data) => {
        this.lunbo = data.data.banners;
      });
    }
  };
  function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_search = resolveEasycom(vue.resolveDynamicComponent("search"), __easycom_0$1);
    return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
      vue.createCommentVNode(" \u641C\u7D22\u6846 "),
      vue.createVNode(_component_search),
      vue.createCommentVNode(" \u8F6E\u64AD "),
      vue.createElementVNode("swiper", {
        "indicator-dots": true,
        autoplay: true,
        interval: 3e3,
        duration: 1e3,
        class: "sw"
      }, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.lunbo, (item) => {
          return vue.openBlock(), vue.createElementBlock("swiper-item", {
            key: item.id
          }, [
            vue.createElementVNode("image", {
              src: item.imageUrl,
              mode: "scaleToFill",
              class: "img"
            }, null, 8, ["src"])
          ]);
        }), 128))
      ]),
      vue.createCommentVNode(" \u5E95\u90E8 "),
      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.bangd, (item) => {
        return vue.openBlock(), vue.createElementBlock("view", {
          class: "flex conu",
          key: item.id,
          onClick: ($event) => $options.tiaoz(item.id)
        }, [
          vue.createElementVNode("view", { class: "flex_1" }, [
            vue.createElementVNode("image", {
              src: item.coverImgUrl,
              mode: ""
            }, null, 8, ["src"]),
            vue.createElementVNode("view", { class: "flex_1_text" }, " \u6BCF\u5929\u66F4\u65B0 ")
          ]),
          vue.createElementVNode("view", { class: "flex_2" }, [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(item.tracks, (itte, valu) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                class: "flex_2_text",
                key: itte.id
              }, vue.toDisplayString(valu) + ". " + vue.toDisplayString(itte.first) + " -- " + vue.toDisplayString(itte.second), 1);
            }), 128))
          ])
        ], 8, ["onClick"]);
      }), 128))
    ], 64);
  }
  var PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$9], ["__scopeId", "data-v-57280228"], ["__file", "C:/Users/\u6478\u6478\u54D2/Desktop/\u4EFF\u7F51\u6613\u4E91uniapp/music/pages/index/index.vue"]]);
  const _sfc_main$9 = {
    data() {
      return {};
    },
    methods: {}
  };
  function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view");
  }
  var PagesUseUse = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$8], ["__file", "C:/Users/\u6478\u6478\u54D2/Desktop/\u4EFF\u7F51\u6613\u4E91uniapp/music/pages/use/use.vue"]]);
  const _sfc_main$8 = {
    name: "top",
    data() {
      return {};
    },
    props: ["haed", "pan", "text", "color"],
    methods: {
      getBack() {
        uni.navigateBack({
          delta: 1
        });
      },
      answer() {
        uni.navigateBack({
          delta: 1
        });
      }
    }
  };
  function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode("view", { class: "content" }, [
        vue.createElementVNode("text", {
          class: vue.normalizeClass({ "tee": $props.text, "tees": $props.color })
        }, vue.toDisplayString($props.haed), 3),
        vue.createElementVNode("view", {
          class: vue.normalizeClass(["dianj", $props.pan ? "yc" : ""])
        }, [
          vue.createElementVNode("text", {
            onClick: _cache[0] || (_cache[0] = (...args) => $options.getBack && $options.getBack(...args))
          }, "\u25C1"),
          vue.createTextVNode(" | "),
          vue.createElementVNode("text", {
            onClick: _cache[1] || (_cache[1] = (...args) => $options.answer && $options.answer(...args))
          }, "\u263A")
        ], 2)
      ])
    ]);
  }
  var __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$7], ["__scopeId", "data-v-bd67cea0"], ["__file", "C:/Users/\u6478\u6478\u54D2/Desktop/\u4EFF\u7F51\u6613\u4E91uniapp/music/components/top/top.vue"]]);
  const _sfc_main$7 = {
    name: "gequ",
    data() {
      return {};
    },
    methods: {
      tz(v) {
        uni.navigateTo({
          url: `/pages/gioca/gioca?id=${v}`
        });
      }
    },
    props: ["name"]
  };
  function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, [
      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.name, (item, index) => {
        return vue.openBlock(), vue.createElementBlock("view", {
          class: "geq",
          key: item.id,
          onClick: ($event) => $options.tz(item.id)
        }, [
          vue.createElementVNode("view", { class: "flex" }, [
            vue.createElementVNode("view", { class: "geq_index" }, vue.toDisplayString(index + 1), 1),
            vue.createElementVNode("view", { class: "geq_nmae" }, [
              vue.createElementVNode("view", { class: "" }, vue.toDisplayString(item.name), 1),
              vue.createElementVNode("view", { class: "geq_nmae_text" }, [
                vue.createElementVNode("image", {
                  src: "/static/vr\u64AD\u653E\u5668.png",
                  mode: ""
                }),
                vue.createElementVNode("image", {
                  src: "/static/\u542C\u6B4C.png",
                  mode: ""
                }),
                vue.createTextVNode(" " + vue.toDisplayString(item.alia[0] || item.ar[0].name), 1)
              ])
            ]),
            vue.createElementVNode("view", { class: "geq_index geq_log" }, " \u2764 ")
          ])
        ], 8, ["onClick"]);
      }), 128))
    ]);
  }
  var __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$6], ["__scopeId", "data-v-6cd147c4"], ["__file", "C:/Users/\u6478\u6478\u54D2/Desktop/\u4EFF\u7F51\u6613\u4E91uniapp/music/components/gequ/gequ.vue"]]);
  const _sfc_main$6 = {
    data() {
      return {
        name: [],
        m: "",
        url: "",
        ges: []
      };
    },
    onLoad(v) {
      formatAppLog("log", "at pages/list/list.vue:28", v.url);
      this.url = v.url;
      src(`/artist/songs?id=${v.id}`).then((data) => {
        formatAppLog("log", "at pages/list/list.vue:31", data.data.songs);
        this.name = data.data.songs;
        this.m = data.data.songs[0].ar[0].name;
      });
      src(`/artist/list?type=${v.type}&area=${v.area}`).then((data) => {
        formatAppLog("log", "at pages/list/list.vue:36", data.data.artists[v.index]);
        this.ges = data.data.artists[v.index];
      });
    },
    methods: {},
    created() {
      formatAppLog("log", "at pages/list/list.vue:42", 1);
    }
  };
  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_top = resolveEasycom(vue.resolveDynamicComponent("top"), __easycom_0);
    const _component_gequ = resolveEasycom(vue.resolveDynamicComponent("gequ"), __easycom_1);
    return vue.openBlock(), vue.createElementBlock("view", { class: "colr" }, [
      vue.createVNode(_component_top, { haed: $data.m }, null, 8, ["haed"]),
      vue.createElementVNode("view", { class: "yans" }, [
        vue.createElementVNode("view", { class: "yans_img" }, [
          vue.createElementVNode("image", {
            src: $data.ges.img1v1Url,
            mode: ""
          }, null, 8, ["src"])
        ]),
        vue.createElementVNode("text", null, [
          vue.createTextVNode("TA\u7684\u6B4C\u5355 "),
          vue.createElementVNode("text", null, "(\u5171" + vue.toDisplayString($data.name.length) + "\u9996)", 1)
        ]),
        vue.createVNode(_component_gequ, { name: $data.name }, null, 8, ["name"])
      ])
    ]);
  }
  var PagesListList = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$5], ["__scopeId", "data-v-7d5e07c6"], ["__file", "C:/Users/\u6478\u6478\u54D2/Desktop/\u4EFF\u7F51\u6613\u4E91uniapp/music/pages/list/list.vue"]]);
  const _sfc_main$5 = {
    data() {
      return {
        person: []
      };
    },
    methods: {},
    created() {
    }
  };
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view");
  }
  var PagesNameName = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$4], ["__file", "C:/Users/\u6478\u6478\u54D2/Desktop/\u4EFF\u7F51\u6613\u4E91uniapp/music/pages/name/name.vue"]]);
  const _sfc_main$4 = {
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
        formatAppLog("log", "at pages/person/person.vue:50", this.ges);
      },
      sjian(e) {
        src(`/artist/list?type=${this.s}&area=${this.g}`).then((data) => {
          formatAppLog("log", "at pages/person/person.vue:54", data);
          this.ges = data.data.artists;
        });
      },
      tiaoz(id, index) {
        uni.navigateTo({
          url: `../list/list?id=${id}&type=${this.s}&area=${this.g}&index=${index}`
        });
      }
    },
    created() {
      this.sjian();
    }
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode("view", { class: "fenle_text_1" }, [
        vue.createElementVNode("text", {
          class: vue.normalizeClass($data.s === -1 ? "colr" : ""),
          onClick: _cache[0] || (_cache[0] = ($event) => $options.genre(-1))
        }, "\u5168\u90E8", 2),
        vue.createElementVNode("text", {
          class: vue.normalizeClass($data.s === 1 ? "colr" : ""),
          onClick: _cache[1] || (_cache[1] = ($event) => $options.genre(1))
        }, "\u7537\u6B4C\u624B", 2),
        vue.createElementVNode("text", {
          class: vue.normalizeClass($data.s === 2 ? "colr" : ""),
          onClick: _cache[2] || (_cache[2] = ($event) => $options.genre(2))
        }, "\u5973\u6B4C\u624B", 2),
        vue.createElementVNode("text", {
          class: vue.normalizeClass($data.s === 3 ? "colr" : ""),
          onClick: _cache[3] || (_cache[3] = ($event) => $options.genre(3))
        }, "\u4E50\u961F", 2)
      ]),
      vue.createElementVNode("view", { class: "fenle_text_2" }, [
        vue.createElementVNode("text", {
          class: vue.normalizeClass($data.g === -1 ? "colr" : ""),
          onClick: _cache[4] || (_cache[4] = ($event) => $options.singer(-1))
        }, "\u5168\u90E8", 2),
        vue.createElementVNode("text", {
          class: vue.normalizeClass($data.g === 7 ? "colr" : ""),
          onClick: _cache[5] || (_cache[5] = ($event) => $options.singer(7))
        }, "\u8BDD\u8BED", 2),
        vue.createElementVNode("text", {
          class: vue.normalizeClass($data.g === 96 ? "colr" : ""),
          onClick: _cache[6] || (_cache[6] = ($event) => $options.singer(96))
        }, "\u6B27\u7F8E", 2),
        vue.createElementVNode("text", {
          class: vue.normalizeClass($data.g === 8 ? "colr" : ""),
          onClick: _cache[7] || (_cache[7] = ($event) => $options.singer(8))
        }, "\u65E5\u672C", 2),
        vue.createElementVNode("text", {
          class: vue.normalizeClass($data.g === 16 ? "colr" : ""),
          onClick: _cache[8] || (_cache[8] = ($event) => $options.singer(16))
        }, "\u97E9\u56FD", 2),
        vue.createElementVNode("text", {
          class: vue.normalizeClass($data.g === 0 ? "colr" : ""),
          onClick: _cache[9] || (_cache[9] = ($event) => $options.singer(0))
        }, "\u5176\u4ED6", 2)
      ]),
      vue.createElementVNode("view", { class: "" }, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.ges, (item, index) => {
          return vue.openBlock(), vue.createElementBlock("view", {
            class: "flex waib",
            onClick: ($event) => $options.tiaoz(item.id, index)
          }, [
            vue.createElementVNode("view", { class: "tubiao" }, [
              vue.createElementVNode("image", {
                src: item.img1v1Url,
                class: "img"
              }, null, 8, ["src"])
            ]),
            vue.createElementVNode("view", { class: "text" }, [
              vue.createElementVNode("text", null, vue.toDisplayString(item.name), 1)
            ])
          ], 8, ["onClick"]);
        }), 256))
      ])
    ]);
  }
  var PagesPersonPerson = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$3], ["__scopeId", "data-v-390a77b4"], ["__file", "C:/Users/\u6478\u6478\u54D2/Desktop/\u4EFF\u7F51\u6613\u4E91uniapp/music/pages/person/person.vue"]]);
  const _sfc_main$3 = {
    data() {
      return {
        ming: []
      };
    },
    onLoad(v) {
      src(`/playlist/detail?id=${v.id}`).then((data) => {
        formatAppLog("log", "at pages/elenco/elenco.vue:53", data.data.playlist);
        this.ming = data.data.playlist;
      });
    },
    methods: {
      fun() {
        formatAppLog("log", "at pages/elenco/elenco.vue:59", this.ming.subscribedCount);
        if (this.ming.subscribedCount > 1e5) {
          return (this.ming.subscribedCount / 1e5).toFixed(1) + "\u4E07";
        }
      }
    },
    watch: {}
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_top = resolveEasycom(vue.resolveDynamicComponent("top"), __easycom_0);
    const _component_gequ = resolveEasycom(vue.resolveDynamicComponent("gequ"), __easycom_1);
    return vue.openBlock(), vue.createElementBlock("view", { class: "" }, [
      vue.createElementVNode("view", {
        class: "baji",
        style: vue.normalizeStyle(`background-image: url(${$data.ming.coverImgUrl});`)
      }, null, 4),
      vue.createVNode(_component_top, {
        haed: $data.ming.name,
        text: true
      }, null, 8, ["haed"]),
      vue.createElementVNode("view", { class: "wenzi" }, [
        vue.createElementVNode("view", { class: "flex" }, [
          vue.createElementVNode("view", { class: "img" }, [
            vue.createElementVNode("text", { class: "img_text" }, vue.toDisplayString($options.fun()), 1),
            vue.createElementVNode("image", {
              src: $data.ming.coverImgUrl,
              mode: "aspectFill"
            }, null, 8, ["src"])
          ]),
          vue.createElementVNode("view", { class: "wenzi_text" }, [
            vue.createElementVNode("view", { class: "text_top" }, " \u4E91\u97F3\u4E50" + vue.toDisplayString($data.ming.name), 1),
            vue.createElementVNode("view", { class: "text_content" }, " \u266C \u266C \u97F3\u4E50 \u266C \u266C "),
            vue.createElementVNode("view", { class: "text_buttom" }, vue.toDisplayString($data.ming.description), 1)
          ])
        ])
      ]),
      vue.createElementVNode("view", { class: "song flex" }, [
        vue.createElementVNode("view", { class: "song_consten" }, [
          vue.createElementVNode("view", { class: "song_top" }, [
            vue.createElementVNode("image", { src: "/static/\u64AD\u653E.png" }),
            vue.createElementVNode("text", null, "\u64AD\u653E\u5168\u90E8 "),
            vue.createElementVNode("text", { class: "song_top_text" }, "\u5171" + vue.toDisplayString($data.ming.trackCount) + "\u9996", 1),
            vue.createVNode(_component_gequ, {
              name: $data.ming.tracks
            }, null, 8, ["name"])
          ])
        ]),
        vue.createVNode(_component_gequ)
      ])
    ]);
  }
  var PagesElencoElenco = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["__scopeId", "data-v-bac80b74"], ["__file", "C:/Users/\u6478\u6478\u54D2/Desktop/\u4EFF\u7F51\u6613\u4E91uniapp/music/pages/elenco/elenco.vue"]]);
  const _sfc_main$2 = {
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
        xixix: 0
      };
    },
    onLoad(v) {
      this.gequ(v.id);
    },
    methods: {
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
      gequ(v) {
        src(`/song/detail?ids=${v}`).then((data) => {
          if (data.data.code === -460) {
            return alert(data.data.message);
          }
          this.details = data.data.songs[0];
          this.img = data.data.songs[0].al.picUrl;
        });
        src(`/lyric?id=${v}`).then((data) => {
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
          src(`/song/url?id=${v}`).then((data2) => {
            this.bgAudioManager.src = data2.data.data[0].url;
            this.bgAudioManager.onPlay(() => {
              this.fun();
            });
            this.bgAudioManager.onEnded(() => {
              this.gequ(this.similarity[0].id);
            });
          });
        });
        src(`/comment/music?id=${v}`).then((data) => {
          this.discuss = data.data.comments;
        });
        src(`/simi/song?id=${v}`).then((data) => {
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
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_top = resolveEasycom(vue.resolveDynamicComponent("top"), __easycom_0);
    return vue.openBlock(), vue.createElementBlock("view", { class: "const" }, [
      vue.createElementVNode("view", {
        class: "baji",
        style: vue.normalizeStyle(`background-image: url(${$data.img});`)
      }, null, 4),
      vue.createVNode(_component_top, {
        haed: $data.details.name,
        text: true
      }, null, 8, ["haed"]),
      vue.createElementVNode("view", { class: "ad_img" }, [
        vue.createElementVNode("view", {
          class: vue.normalizeClass(["img", $data.imge ? "imge" : ""])
        }, [
          vue.createElementVNode("image", {
            class: "img_1",
            src: "/static/\u5149\u789F1.png",
            mode: ""
          }),
          vue.createElementVNode("image", {
            class: "img_2",
            src: $data.img,
            mode: ""
          }, null, 8, ["src"])
        ], 2),
        vue.createElementVNode("image", {
          onClick: _cache[0] || (_cache[0] = (...args) => $options.imgClick && $options.imgClick(...args)),
          class: "img_3",
          src: $data.imge ? "../../static/\u64AD\u653E.png" : "../../static/\u6682\u505C.png",
          mode: ""
        }, null, 8, ["src"])
      ]),
      vue.createCommentVNode(" \u6B4C\u8BCD "),
      vue.createElementVNode("view", { class: "text" }, [
        vue.createElementVNode("view", {
          class: "text_oo",
          style: vue.normalizeStyle(`margin-top: ${$data.gc * -84}rpx;`)
        }, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.lyric, (item, index) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              class: vue.normalizeClass($data.gc === index ? "colo" : ""),
              key: item.id
            }, vue.toDisplayString(item.lyric), 3);
          }), 128))
        ], 4)
      ]),
      vue.createCommentVNode(" \u559C\u6B22\u542C "),
      vue.createElementVNode("view", { class: "wxh" }, [
        vue.createElementVNode("view", { class: "wxh_Tex" }, [
          vue.createElementVNode("text", null, "\u559C\u6B22\u8FD9\u9996\u6B4C\u7684\u4EBA\u4E5F\u542C")
        ]),
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.similarity, (item) => {
          return vue.openBlock(), vue.createElementBlock("view", {
            class: "wxh_con",
            key: item.id,
            onClick: ($event) => $options.qiehuan(item.id)
          }, [
            vue.createElementVNode("view", { class: "wxh_img flex" }, [
              vue.createElementVNode("image", {
                src: item.album.blurPicUrl,
                mode: ""
              }, null, 8, ["src"])
            ]),
            vue.createElementVNode("view", { class: "wxh_flex" }, [
              vue.createElementVNode("view", { class: "" }, vue.toDisplayString(item.name), 1),
              vue.createElementVNode("view", { class: "" }, vue.toDisplayString(item.artists[0].name), 1)
            ]),
            vue.createElementVNode("view", { class: "wxh_img1 flex" }, [
              vue.createElementVNode("image", {
                src: "/static/\u64AD\u653E1.png",
                mode: ""
              })
            ])
          ], 8, ["onClick"]);
        }), 128))
      ]),
      vue.createCommentVNode(" \u7CBE\u5F69\u8BC4\u8BBA "),
      vue.createElementVNode("view", { class: "wxh" }, [
        vue.createElementVNode("view", { class: "wxh_Tex" }, [
          vue.createElementVNode("text", null, "\u6696\u5FC3\u8BC4\u8BBA")
        ]),
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.discuss, (item) => {
          return vue.openBlock(), vue.createElementBlock("view", {
            class: "flex pl",
            key: item.id
          }, [
            vue.createElementVNode("view", { class: "dianz" }, vue.toDisplayString(item.likedCount) + " \u2665 ", 1),
            vue.createElementVNode("view", { class: "pl_box1 flex" }, [
              vue.createElementVNode("image", {
                class: "pl_image",
                src: item.user.avatarUrl,
                mode: ""
              }, null, 8, ["src"])
            ]),
            vue.createElementVNode("view", { class: "pl_box2" }, [
              vue.createElementVNode("view", { class: "pl_text_color" }, vue.toDisplayString(item.user.nickname), 1),
              vue.createElementVNode("view", { class: "pl_text_color" }, vue.toDisplayString($options.sj) + vue.toDisplayString(item.timeStr), 1),
              vue.createElementVNode("view", { class: "" }, vue.toDisplayString(item.content), 1)
            ])
          ]);
        }), 128))
      ])
    ]);
  }
  var PagesGiocaGioca = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__scopeId", "data-v-cf4bb144"], ["__file", "C:/Users/\u6478\u6478\u54D2/Desktop/\u4EFF\u7F51\u6613\u4E91uniapp/music/pages/gioca/gioca.vue"]]);
  const _sfc_main$1 = {
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
          uni.setStorage({
            key: "scehost",
            data: this.scehost
          });
        }
        this.ss(v);
      },
      ss(v) {
        src(`/search?keywords=${v}`).then((data) => {
          formatAppLog("log", "at pages/ss/ss.vue:91", data.data.result.songs);
          this.seoushuo = data.data.result.songs;
          this.xs = 2;
        });
      },
      deletes() {
        uni.removeStorage({
          key: "scehost",
          success: (res) => {
            formatAppLog("log", "at pages/ss/ss.vue:100", res);
            this.scehost = [];
          }
        });
      },
      tiaozhuan(v) {
        uni.navigateTo({
          url: `/pages/gioca/gioca?id=${v}`
        });
      }
    },
    mounted() {
      src("/search/hot/detail").then((data) => {
        formatAppLog("log", "at pages/ss/ss.vue:114", data.data.data);
        this.res = data.data.data;
      });
      uni.getStorage({
        key: "scehost",
        success: (res) => {
          this.scehost = res.data;
        }
      });
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_top = resolveEasycom(vue.resolveDynamicComponent("top"), __easycom_0);
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createVNode(_component_top, {
        haed: "\u641C\u7D22",
        text: true,
        color: "true"
      }),
      vue.createElementVNode("view", { class: "search" }, [
        vue.withDirectives(vue.createElementVNode("input", {
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.inut = $event),
          onConfirm: _cache[1] || (_cache[1] = ($event) => $options.scehosts($data.inut)),
          type: "text",
          class: "input",
          placeholder: "\u641C\u7D22\u6B4C\u66F2"
        }, null, 544), [
          [vue.vModelText, $data.inut]
        ]),
        $data.xs === 2 ? (vue.openBlock(), vue.createElementBlock("image", {
          key: 0,
          onClick: _cache[2] || (_cache[2] = ($event) => $data.xs = 1),
          class: "search_image",
          src: "/static/\u53C9\u53C9.png"
        })) : vue.createCommentVNode("v-if", true)
      ]),
      $data.xs === 1 ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: ""
      }, [
        vue.createElementVNode("view", { class: "lis" }, [
          vue.createElementVNode("text", null, "\u5386\u53F2\u8BB0\u5F55"),
          vue.createElementVNode("image", {
            src: "/static/\u9996\u9875_fill.png",
            onClick: _cache[3] || (_cache[3] = (...args) => $options.deletes && $options.deletes(...args))
          })
        ]),
        vue.createElementVNode("view", { class: "ls" }, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.scehost, (item) => {
            return vue.openBlock(), vue.createElementBlock("text", {
              class: "ls_text",
              key: item,
              onClick: ($event) => $options.gaibian(item)
            }, vue.toDisplayString(item), 9, ["onClick"]);
          }), 128))
        ]),
        vue.createElementVNode("view", { class: "lis re" }, [
          vue.createElementVNode("text", null, "\u70ED\u641C\u699C")
        ]),
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.res, (item, index) => {
          return vue.openBlock(), vue.createElementBlock("view", {
            class: "resou",
            key: item.id,
            onClick: ($event) => $options.gaibian(item.searchWord)
          }, [
            vue.createElementVNode("view", { class: "resou_1 flex" }, vue.toDisplayString(index), 1),
            vue.createElementVNode("view", { class: "resou_2" }, [
              vue.createElementVNode("view", { class: "" }, [
                vue.createTextVNode(vue.toDisplayString(item.searchWord) + " ", 1),
                vue.withDirectives(vue.createElementVNode("img", {
                  src: item.iconUrl,
                  class: "resou_2_text"
                }, null, 8, ["src"]), [
                  [vue.vShow, item.iconUrl !== null]
                ])
              ]),
              vue.createElementVNode("view", { class: "resou_2_2" }, vue.toDisplayString(item.content), 1)
            ]),
            vue.createElementVNode("view", { class: "resou_3 flex" }, vue.toDisplayString(item.score), 1)
          ], 8, ["onClick"]);
        }), 128))
      ])) : vue.createCommentVNode("v-if", true),
      vue.createCommentVNode(" \u641C\u7D22 "),
      $data.xs === 2 ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 1,
        class: ""
      }, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.seoushuo, (item) => {
          return vue.openBlock(), vue.createElementBlock("view", {
            class: "ssu",
            onClick: ($event) => $options.tiaozhuan(item.id)
          }, [
            vue.createElementVNode("view", { class: "ssu_flex" }, [
              vue.createElementVNode("view", { class: "ssu_tet" }, vue.toDisplayString(item.name), 1),
              vue.createElementVNode("view", { class: "" }, vue.toDisplayString(item.artists[0].name) + " - " + vue.toDisplayString(item.album.name), 1)
            ]),
            vue.createElementVNode("view", { class: "ssu_img" }, " \u261C\u261E ")
          ], 8, ["onClick"]);
        }), 256))
      ])) : vue.createCommentVNode("v-if", true)
    ]);
  }
  var PagesSsSs = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__scopeId", "data-v-201d9046"], ["__file", "C:/Users/\u6478\u6478\u54D2/Desktop/\u4EFF\u7F51\u6613\u4E91uniapp/music/pages/ss/ss.vue"]]);
  __definePage("pages/index/index", PagesIndexIndex);
  __definePage("pages/use/use", PagesUseUse);
  __definePage("pages/list/list", PagesListList);
  __definePage("pages/name/name", PagesNameName);
  __definePage("pages/person/person", PagesPersonPerson);
  __definePage("pages/elenco/elenco", PagesElencoElenco);
  __definePage("pages/gioca/gioca", PagesGiocaGioca);
  __definePage("pages/ss/ss", PagesSsSs);
  const _sfc_main = {
    onLaunch: function() {
      formatAppLog("log", "at App.vue:4", "App Launch");
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:7", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:10", "App Hide");
    }
  };
  var App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "C:/Users/\u6478\u6478\u54D2/Desktop/\u4EFF\u7F51\u6613\u4E91uniapp/music/App.vue"]]);
  function createApp() {
    const app = vue.createVueApp(App);
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue, uni.VueShared);
