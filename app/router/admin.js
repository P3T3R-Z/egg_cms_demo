module.exports = app => {
  const { router, controller } = app;
  router.get("/admin", controller.home.index);
  router.get("/admin/edit", controller.home.edit);
  router.get("/admin/login", controller.home.login);
  router.post("/admin/dologin", controller.home.dologin);
  router.get("/admin/auth", controller.home.auth);
  router.get("/admin/verify", controller.base.verify);
  router.get("/admin/logout", controller.home.logout);
};
