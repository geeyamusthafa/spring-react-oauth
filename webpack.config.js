var path = require('path');

module.exports = {
    entry: ['babel-polyfill', './src/main/js/app.js'],
    devtool: 'sourcemaps',
    cache: true,
    output: {
        path: __dirname,
        filename: './src/main/resources/static/built/bundle.js'
    },
    module: {
        rules: [
            {
                test: path.join(__dirname, '.'),    
                //test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    cacheDirectory: true,
                    presets: ['env', 'react', 'stage-2'],
                    plugins: ['transform-decorators-legacy']
                }
            }, {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }, 
            {
                test: /\.(eot|svg|ttf|woff(2)?)(\?v=\d+\.\d+\.\d+)?/,
                loader: 'url-loader'
            }
        ]
    }
};