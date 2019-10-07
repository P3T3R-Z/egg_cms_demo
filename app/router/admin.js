module.exports = app => {
  const { router, controller } = app;
  router.get("/admin", controller.home.index);
  router.get("/admin/edit", controller.home.edit);
  router.get("/admin/login", controller.home.login);
  router.get("/admin/auth", controller.home.auth);
};
