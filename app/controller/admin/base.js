//父类

'use strict';



const Controller = require('egg').Controller;

class BaseController extends Controller {
  async success(redirectUrl,message) {

    // this.ctx.body='成功';

    await this.ctx.render('admin/public/success',{
      redirectUrl:redirectUrl,
      message:message||'操作成功!'
    });


  }

  async error(redirectUrl,message) {

    // this.ctx.body='成功';

    await this.ctx.render('admin/public/error',{
      redirectUrl:redirectUrl,
      message:message||'操作成功!'
    });

  }

  async verify() {


    var captcha=await this.service.tools.captcha();  //服务里面的方法

    this.ctx.response.type = 'image/svg+xml';   /*指定返回的类型*/

    this.ctx.body=captcha.data;      /*给页面返回一张图片*/
  }

  //封装一个删除方法   
   
 async delete(){
   /*
   1. 获取要删除的数据库表 model
   2. 获取要删除数据的id
   3. 执行删除
   4. 返回以前的页面  ctx.request.headers'referer'] 上一页地址
   */

   var model=this.ctx.request.query.model;
   var id=this.ctx.request.query.id;
   
    await this.ctx.model[model].deleteOne({"_id":id})
    this.ctx.redirect(this.ctx.state.prevPage)  //此处为全局的上一页路径变量 (在中间件中设置))
 }



  
}

module.exports = BaseController;
