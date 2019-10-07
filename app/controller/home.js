'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    await ctx.render('/admin/index')
  }
  async edit() {
    const { ctx } = this;
    await ctx.render('/admin/edit')
  }
  async login() {
    const { ctx } = this;
    await ctx.render('/admin/login')
  }
  async auth() {
    const { ctx } = this;
    await ctx.render('/admin/auth')
  }
}

module.exports = HomeController;
