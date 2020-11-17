```
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'development',
    target: 'web',
    externals: {
        jquery: 'jQuery'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [{
            test: /\.js|jsx/,
        }]
    }
}
```