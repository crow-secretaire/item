"use strict";
var common_vendor = require("../common/vendor.js");
const dz = "http://127.0.0.1:3000";
const src = async (d) => {
  return await common_vendor.index.request({
    url: dz + d
  });
};
exports.src = src;
