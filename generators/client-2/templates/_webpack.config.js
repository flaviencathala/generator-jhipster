module.exports = {
    entry: {
        'main': './src/main/webapp/app/app.main',
        'polyfills': './src/main/webapp/app/polyfills.ts'
    },
    resolve: {
        extensions: ['.ts', '.js', '.json'],
        modules: ['./', 'node_modules']
    },
    output: {
        path: './src/main/webapp/bin',
        filename: '[name].bundle.js',
        chunkFilename: '[id].chunk.js'
    },
    module: {
        rules: [{
            test: /\.ts$/,
            loaders: [
                'angular2-template-loader',
                'awesome-typescript-loader'
            ],
            exclude: ['node_modules/generator-jhipster']
        },
        {
            test: /\.html$/,
            loader: 'raw-loader',
            exclude: ['./src/main/webapp/index.html']
        }]
    }
 };