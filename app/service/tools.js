"use strict";
const svgCaptcha = require("svg-captcha");
const md5 =require('md5')

const Service = require("egg").Service;

class ToolsService extends Service {
  async verify() {
    var captcha = svgCaptcha.create({
      size: 6,
      fontSize: 50,
      width: 100,
      height: 30,
      background: "#ccc"
    });
    this.ctx.session.code = captcha.text; //验证码信息
    return captcha;
  }
  md5(str){
    return md5(str)
  }
}

module.exports = ToolsService;
