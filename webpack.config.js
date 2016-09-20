const path = require('path')

module.exports = {
    context: path.resolve(__dirname, 'frontend'),
    entry: [
        './index.js',
    ],
    output: {
        path: path.resolve(__dirname, 'public'),
        publicPath: '/',
        filename: 'bundle.js',
        hot: true
    },
    resolveLoader: {
        root: path.resolve(__dirname, 'node_modules')
    },
    module: {
        loaders: [
            {
                test: /\.js$/, exclude: /(node_modules|bower_components)/,
                include: path.resolve(__dirname, 'frontend'),
                loader: 'babel',
                query: {presets: ['es2015']}
            },
            {test: /\.css$/, loader: 'style!css'},
            {test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff'},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'},
            {test: /\json$/, loader: 'json'},
            {test: /\.html$/, loader: 'file'},
            {test: /\.ico$/, loader: 'file'},
        ]
    },
    node: {
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    },
    devServer: {
        inline: true
    },
    compress :true
}
