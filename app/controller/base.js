'use strict';

const Controller = require('egg').Controller;


class BaseController extends Controller {
  async success(redirectUrl) {
    await this.ctx.render('public/success',{redirectUrl})
  }
  async error(redirectUrl, text) {
    await this.ctx.render('public/error',{redirectUrl, msg: text||'操作错误'})
  }
  async verify(){
    var captcha = await this.service.tools.verify()
    this.ctx.response.type='image/svg+xml';//指定返回的类型
    this.ctx.body=captcha.data; //给页面返回图片
  }
}

module.exports = BaseController;
