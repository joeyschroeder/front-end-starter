module.exports = function babelConfig(api) {
  api.cache(true);

  return {
    presets: ["@babel/preset-env", "@babel/preset-react"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "components": "./src/components",
            "constants": "./src/constants",
            "fonts": "./src/fonts",
            "store": "./src/store",
            "styles": "./src/styles",
            "utils": "./src/utils"
          }
        }
      ]
    ],
    env: {
      development: {
        plugins: ["react-refresh/babel"]
      }
    }
  }
};
