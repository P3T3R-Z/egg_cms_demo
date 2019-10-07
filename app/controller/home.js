"use strict";

const BaseController = require("./base.js");

class HomeController extends BaseController {
  async index() {
    const { ctx } = this;
    // var user = new this.ctx.model.Admin({
    //   username: "admin",
    //   password: this.service.tools.md5("123123"),
    //   is_super: 1
    // });
    // var result = await user.save();
    // console.log(result);
    await ctx.render('admin/index')
    //await this.success("/admin/login");
  }
  async edit() {
    const { ctx } = this;
    await ctx.render("admin/edit");
  }
  async login() {
    const { ctx } = this;
    await ctx.render("admin/login");
  }
  async dologin() {
    let { username, password, verify } = this.ctx.request.body;
    password=this.service.tools.md5(password)
   
    if(verify.toLowerCase()!=this.ctx.session.code.toLowerCase()){
      await this.error('/admin/login','验证码错误')
    } else {

      var result=await this.ctx.model.Admin.find({
        'username':username,
        'password':password,
      })

      if(result.length>0){
        //登录成功
        this.ctx.session.userinfo=result[0];

        //跳转用户中心
        this.ctx.redirect('/admin')
      } else {
        await this.error('/admin/login','账号或登录密码错误')
      }
    }
  }
  async auth() {
    const { ctx } = this;
    await ctx.render("admin/auth");
  }
  logout(){
    this.ctx.session.userinfo=null;
    this.ctx.redirect('/admin/login')
  }
}

module.exports = HomeController;
