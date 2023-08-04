const path = require('path');

const webpack = require('webpack');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
const CopywebpackPlugin = require('copy-webpack-plugin');

const { configPaths } = require('react-app-rewire-alias');
let aliasMap = configPaths('tsconfig.paths.json');

const cesiumPath = 'node_modules/cesium/Source/Cesium.js';
const cesiumSource = 'node_modules/cesium/Source';
const cesiumWorkers = '../Build/Cesium/Workers';

module.exports = {
    webpack: {
        configure: (webpackConfig, { env, paths }) => {
            webpackConfig.output.sourcePrefix = '';
            webpackConfig.amd = {
                // Enable webpack-friendly use of require in Cesium
                toUrlUndefined: true,
            };

            let alias = webpackConfig.resolve.alias || {}
            Object.keys(aliasMap).forEach(key => {
                alias[key] = path.resolve(__dirname, aliasMap[key]);
            });
            alias["Cesium"] = path.resolve(__dirname, cesiumPath);
            alias["cesiumSource"] = path.resolve(__dirname, cesiumSource);
            console.log(alias);
            webpackConfig.resolve.alias = alias;

            webpackConfig.plugins = webpackConfig.plugins || [];
            webpackConfig.plugins.push(new NodePolyfillPlugin());
            webpackConfig.plugins.push(new CopywebpackPlugin({
                patterns: [
                    {
                        from: path.join(cesiumSource, cesiumWorkers),
                        to: 'cesium/Workers',
                        toType: 'dir',
                    },
                    {
                        from: path.join(cesiumSource, 'Assets'),
                        to: 'cesium/Assets',
                        toType: 'dir',
                    },
                    {
                        from: path.join(cesiumSource, 'Widgets'),
                        to: 'cesium/Widgets',
                        toType: 'dir',
                    },
                ],
            }));

            webpackConfig.plugins.push(new webpack.DefinePlugin({
                CESIUM_BASE_URL: JSON.stringify(process.env.REACT_APP_CESIUM_BASE_URL)
            }));

            // const rules = webpackConfig.module.rules || {};
            // rules.push({
            //     test: /\.css$/i,
            //     use: [
            //         {
            //             loader: "style-loader",
            //         },
            //         "css-loader",
            //     ],
            // })

            return webpackConfig;
        }
    }
};