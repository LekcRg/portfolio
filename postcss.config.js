module.exports = {
  syntax: "postcss-scss",
  plugins: [
    require("postcss-easy-import")({
      extensions: ".scss"
    }),
    require("autoprefixer")({
      browsers: ["last 2 versions"],
      cascade: false
    }),
    require("postcss-pxtorem")({
      propList:
        [
          'font',
          'font-size',
          'line-height',
          'letter-spacing',
          'padding',
          'padding-bottom',
          'padding-top',
          'padding-left',
          'padding-right',
          'margin',
          'margin-top',
          'margin-bottom',
          'margin-left',
          'margin-right'
        ],
      minPixelValue: 6
    }),
    require("postcss-advanced-variables")({
      variables: require("./src/assets/styles/variables")
    }),
    require("postcss-nested"),
    require("postcss-rgb"),
    require("postcss-inline-comment"),
    require("postcss-inline-svg")({
      removeFill: true,
      path: "./src/assets/images/icons"
    }),
    require("postcss-svgo"),
    require("cssnano")()
  ]
};
