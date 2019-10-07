module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  var d = new Date();
  const AdminSchema = new Schema({
    username: {
      type: String
    },
    password: {
      type: String
    },
    mobile: { type: String },
    status: {
      type: Number,
      default: 1
    },
    role_id: {
      //角色id
      type: Schema.Types.ObjectId
    },
    add_time: {
      type: Number,
      default: d.getTime()
    },
    is_super: {
      //是否超级管理员
      type: Number
    }
  });

  return mongoose.model("Admin", AdminSchema, "admin");
};
