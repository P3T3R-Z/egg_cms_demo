'use strict';

var BaseController =require('./base.js');

class ManagerController extends BaseController {
  async index() {

    // this.ctx.body='管理员列表'
    var result=await this.ctx.model.Admin.aggregate([{
      $lookup:{
        from:'role',
        localField:'role_id',
        foreignField:'_id',
        as: "role"
      }
    }])

    console.log(JSON.stringify(result))
    await this.ctx.render('admin/manager/index',{

      list:result
    });
    
  } 


  async add() {

    //获取角色类型
    var roleresult=await this.ctx.model.Role.find()
    await this.ctx.render('admin/manager/add',{
      role: roleresult
    });
    
  } 
  async doAdd(){
    console.log(this.ctx.request.body);
    var addResult=this.ctx.request.body;

    addResult.password=await this.service.tools.md5(addResult.password);

    //判断当前用户是否存在

    var adminResult=await this.ctx.model.Admin.find({"username": addResult.username});

    if(adminResult.length>0){
      await this.error('/admin/manager/add',"此管理员已经存在")
    } else {

      var admin=new this.ctx.model.Admin(addResult)
      admin.save();
      await this.success('/admin/manager/add',"增加用户成功")
    }



    
   
    
  }
  async edit() {
 
    //获取编辑的数据
    var id=this.ctx.request.query.id;
    var adminResult=await this.ctx.model.Admin.find({
      _id: id
    })
    var role=await this.ctx.model.Role.find()
    
    await this.ctx.render('admin/manager/edit',{
      adminResult,
      role
    });
  } 
}

module.exports = ManagerController;
