var url=require('url')
var neqpath=['/admin/login','/admin/verify','/admin/dologin']
module.exports = (options, app) => {
  return async function auth(ctx, next) {

    ctx.state.csrf=ctx.csrf  //全局变量
    var pathname = url.parse(ctx.request.url).pathname;
    
    if(ctx.session.userinfo){
        ctx.state.userinfo=ctx.session.userinfo  //保存全局变量userinfo
        await next()
    } else {
      ctx.state.userinfo={}
        if(neqpath.includes(pathname)){
            await next()
        } else {
            ctx.redirect('/admin/login')
        }
    }
  };
};
