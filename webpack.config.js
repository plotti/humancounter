const path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/assets',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/, exclude: /(node_modules|bower_components)/, loader: 'babel',
                query: {presets: ['es2015']}
            },
            {test: /\.css$/, loader: 'style!css'},
            {test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff'},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'},
            {test: /\json$/, loader: 'json'}
        ]
    },
    node: {
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    }
}
