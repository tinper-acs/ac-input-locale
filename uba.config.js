const path = require("path");
const hotMiddlewareScript = "webpack-hot-middleware/client?reload=true";
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
const OpenBrowserPlugin = require("open-browser-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");

//服务启动设置
const svrConfig = {
  host: "127.0.0.1",
  port: 3003,
  //是否开启静默模式？true开启，紧显示错误和警告，如要看信息为false。
  noInfo: false
};

//远程代理访问，可以配置多个代理服务
const proxyConfig = [{
  enable: false, //true启用代理,mock服务失效.
  router: "/", //代理的路由
  url: "cnodejs.org",
  options: {
    filter: function(req, res) { //不需要代理可以排除
      return (req.url.indexOf("webpack_hmr") > -1 ? false : true);
    }
  }
}];

//静态服务托管
const staticConfig = {
  folder: "./static"
};

//提取package里的包
function getVendors() {
  let pkg = require("./package.json");
  let _vendors = [];
  for (const key in pkg.dependencies) {
    _vendors.push(key);
  }
  return _vendors;
}


//优化配置，对于使用CDN作为包资源的引用从外到内的配置
const externals = {
  "react": "React",
  "react-dom": "ReactDOM",
  "react-router": "ReactRouter"
}

//默认加载扩展名、相对JS路径模块的配置
const resolve = {
  extensions: [
    ".jsx", ".js"
  ],
  alias: {
    components: path.resolve(__dirname, "src/components/"),
    assets: path.resolve(__dirname, "src/assets/"),
    containers: path.resolve(__dirname, "src/containers/")
  }
}

//开发和生产需要的loader
const rules = [{
  test: /\.js[x]?$/,
  exclude: /(node_modules)/,
  // include: path.resolve("src"),
  use: [{
    loader: "babel-loader"
  }]
}, {
  test: /\.css$/,
  use: ExtractTextPlugin.extract({
    use: ["css-loader", "postcss-loader"],
    fallback: "style-loader"
  })
},
{
  test: /\.scss$/,
  use: ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: ['css-loader', 'sass-loader']
  })
},
{
  test: /\.less$/,
  use: ExtractTextPlugin.extract({
    use: ['css-loader', 'postcss-loader', 'less-loader'],
    fallback: 'style-loader'
  })
}, {
  test: /\.(png|jpg|jpeg|gif)(\?.+)?$/,
  exclude: /favicon\.png$/,
  use: [{
    loader: "url-loader",
    options: {
      limit: 10000,
      name: "[name].[hash:8].[ext]"
    }
  }]
}, {
  test: /\.(eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
  use: [{
    loader: "file-loader",
    options: {
      name: "[name].[hash:8].[ext]"
    }
  }]
}]



//开发环境的webpack配置
const devConfig = {
  devtool: "cheap-module-source-map",
  entry: {
    vendors: getVendors(),
    app: ["babel-polyfill","./demo/index.js", hotMiddlewareScript]
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].[hash].js",
    publicPath: "/"
  },
  externals: externals,
  module: {
    rules: rules
  },
  plugins: [
    new CommonsChunkPlugin({
      name: "vendors"
    }),
    new ExtractTextPlugin({
      filename: "[name].css"
      // filename: "[name].[hash].css"
    }),
    new webpack.NamedModulesPlugin(),
    new OpenBrowserPlugin({
      url: `http://${svrConfig.host}:${svrConfig.port}`
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./index.html",
      inject: "body",
      hash: false,
      favicon: "./src/assets/images/favicon.png",
      chunks: ["vendors", "app"]
    })
  ],
  resolve: resolve
}


//生产环境的webpack配置
const prodConfig = {
  entry: {
    vendors: getVendors(),
    app: ["babel-polyfill","./src/index.js"]
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].[hash].js",
    publicPath: ""
  },
  externals: externals,
  module: {
    rules: rules
  },
  plugins: [
    new CommonsChunkPlugin({
      name: "vendors"
    }),
    new ExtractTextPlugin({
      filename: "[name].[hash].css"
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new UglifyJSPlugin(),
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./index.html",
      inject: "body",
      hash: true,
      favicon: "./src/assets/images/favicon.png",
      chunks: ["vendors", "app"]
    })
  ],
  resolve: resolve
}





//最终向uba导出配置文件
module.exports = {
  devConfig,
  prodConfig,
  svrConfig,
  proxyConfig,
  staticConfig
};
