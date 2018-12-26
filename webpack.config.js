const dev = process.env.NODE_ENV !== "production";
const path = require("path");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");

const plugins = [
    new FriendlyErrorsWebpackPlugin(),
];

if (!dev) {
    plugins.push(new BundleAnalyzerPlugin({
        analyzerMode: "static",
        reportFilename: "webpack-report.html",
        openAnalyzer: false,
    }));
}

const cfg = require('./package.json')


module.exports = {
    mode: dev ? "development" : "production",
    context: path.join(__dirname, "./src/basic"),
    devtool: dev ? "none" : "source-map",
    entry: {
        app: "./client.js",
    },
    resolve: {
        modules: [
            path.resolve("./src/basic"),
            "node_modules",
        ],
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader",
                query: {
                    babelrc: false,  // 禁止使用.babelrc文件
                    presets: cfg.babel.presets,
                    plugins: [
                    ]
                  }
                
            },
        ],
    },
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "[name].bundle.js",
    },
    plugins,
};
