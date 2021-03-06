// THIS IS FILE IS OPTIONAL, you can delete it if you don't want to use it

// config.js is the entry file for your VuePress app configuration
// It can also be written in yml or toml instead of js
// See the documentation for more information on how to use it
// https://v1.vuepress.vuejs.org/config/

module.exports = {
  title: "Hot off the VuePress",
  description: "VuePress and custom themes",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" }
    ],
    globalHashtags: ['vuejsamsterdam', 'vuepress']
  },
  markdown: {
    anchor: {
      permalink: false
    }
  },
  plugins: {
    "clean-urls": {
      normalSuffix: ""
    }
  }
};
