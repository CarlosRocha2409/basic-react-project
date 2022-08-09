const { ProvidePlugin } = require("webpack");
const path = require("path");

module.exports = function (config, env) {
    return {
        ...config,
        module: {
            ...config.module,
            rules: [
                ...config.module.rules,
                {
                    test: /\.(m?js|ts)$/,
                    enforce: "pre",
                    use: ["source-map-loader"],
                },
                {
                    test: /\.m?js/,
                    resolve: {
                        fullySpecified: false,
                    },
                },
            ],
        },
        plugins: [
            ...config.plugins,
            new ProvidePlugin({
                process: "process/browser",
            }),
        ],
        resolve: {
            ...config.resolve,
            alias: {
                ...config.alias,
                "@views": path.resolve(__dirname, "src/renderer/views"),
                "@components": path.resolve(__dirname, "src/renderer/components"),
                "@hooks": path.resolve(__dirname, "src/renderer/hooks"),
                "@utils": path.resolve(__dirname, "src/renderer/utils"),
                "@assets": path.resolve(__dirname, "src/renderer/assets"),
                "@app-types": path.resolve(__dirname, "src/renderer/types"),
                process: "process/browser",
            },

            fallback: {
                assert: require.resolve("assert"),
                buffer: require.resolve("buffer"),
                fs: false,
            },
        },
        ignoreWarnings: [/Failed to parse source map/],
    };
};
