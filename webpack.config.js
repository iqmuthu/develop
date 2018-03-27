
module.exports = {
    context: __dirname,
    entry: {
        'main': './ClientEntry.js',
    },
    output: {
        path: __dirname + 'dist/assets',
        filename: 'client-bundle.js',
        publicPath: '/assets'
    },
    devServer: {
        contentBase: __dirname,
    },
    module: {
        rules: [
            {  
                test: /\.jsx|\.js$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'react']
                    }
                }]
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    }
};
