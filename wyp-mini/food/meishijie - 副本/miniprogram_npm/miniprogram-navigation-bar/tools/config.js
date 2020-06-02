var e = require("path"), s = require("webpack"), i = require("webpack-node-externals"), r = process.argv.indexOf("--develop") >= 0, n = process.argv.indexOf("--watch") >= 0, o = e.resolve(__dirname, "./demo"), t = e.resolve(__dirname, "../miniprogram_dev"), a = e.resolve(__dirname, "../src"), m = e.join(t, "components"), d = e.resolve(__dirname, "../miniprogram_dist");

module.exports = {
    entry: "index",
    isDev: r,
    isWatch: n,
    srcPath: a,
    distPath: r ? m : d,
    demoSrc: o,
    demoDist: t,
    wxss: {
        less: !0,
        sourcemap: !1
    },
    webpack: {
        mode: "production",
        output: {
            filename: "[name].js",
            libraryTarget: "commonjs2"
        },
        target: "node",
        externals: [ i() ],
        module: {
            rules: [ {
                test: /\.js$/i,
                use: "babel-loader",
                exclude: /node_modules/
            } ]
        },
        resolve: {
            modules: [ a, "node_modules" ],
            extensions: [ ".js", ".json" ]
        },
        plugins: [ new s.DefinePlugin({}), new s.optimize.LimitChunkCountPlugin({
            maxChunks: 1
        }) ],
        optimization: {
            minimize: !1
        },
        performance: {
            hints: "warning",
            assetFilter: function(e) {
                return e.endsWith(".js");
            }
        }
    },
    copy: [ "./wxml", "./wxss", "./wxs", "./images" ]
};