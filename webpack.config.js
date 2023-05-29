const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    main: "./src/js/index.js",
    pri: "./src/js/pri.js",
    tokutei: "./src/js/tokutei.js"
  },

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].js"
  },

  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist")
    }
  },

  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/i,
        generator: {
          filename: `./images/[name][ext]`
        },
        type: "asset/resource"
      },

      {
        test: /\.js$/,
        exclude: /nodemodules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },

      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [["autoprefixer", { grid: "autoplace" }]]
              }
            }
          },
          {
            loader: "sass-loader",
            options: {
              implementation: require("sass")
            }
          }
        ]
      },

      {
        test: /\.html$/i,
        loader: "html-loader",
        options: {
          sources: {
            list: [
              // All default supported tags and attributes
              "...",
              {
                tag: "img",
                attribute: "data-src",
                type: "src"
              },
              {
                tag: "img",
                attribute: "data-srcset",
                type: "srcset"
              },
              {
                tag: "source",
                attribute: "data-srcset",
                type: "srcset"
              }
            ],
            urlFilter: (attribute, value, resourcePath) => {
              // The `attribute` argument contains a name of the HTML attribute.
              // The `value` argument contains a value of the HTML attribute.
              // The `resourcePath` argument contains a path to the loaded HTML file.

              if (/example\.pdf$/.test(value)) {
                return false;
              }

              return true;
            }
          }
        }
      },

      {
        test: /\.(tty|otf|woff2?|eot|)$/,
        type: "asset/resource",
        generator: {
          filename: "fonts/[name][ext]"
        }
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/style.css"
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
      inject: "body",
      chunks: ["main"]
    }),
    new HtmlWebpackPlugin({
      template: "./src/pri.html",
      filename: "pri.html",
      inject: "body",
      chunks: ["pri"]
    }),
    new HtmlWebpackPlugin({
      template: "./src/tokutei.html",
      filename: "tokutei.html",
      inject: "body",
      chunks: ["tokutei"]
    })
  ],

  target: ["web", "es5"]
};
