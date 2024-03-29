/* eslint valid-jsdoc: "off" */

"use strict";

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_1570415791179_3664";

  // add your middleware config here
  config.middleware = ["adminauth"];
  config.adminauth={
    match: '/admin'
  }
  config.view = {
    mapping: {
      ".html": "ejs",
      '.nj': 'nunjucks'
    }
  };
  config.session = {
    key: "SESSION_ID",
    maxAge: 864000,
    httpOnly: true,
    encrypt: true,
    renew: true
  };

  config.mongoose={
    client:{
      url:'mongodb://127.0.0.1/eggxiaomi',
      options:{}
    }
  }
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig
  };
};
