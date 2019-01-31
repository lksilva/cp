var path = require('path');

module.exports = {
    // Change to your "entry-point".
    entry: path.resolve(__dirname, 'src'),
    output: {
        path: path.resolve(__dirname, 'lib'),
        filename: 'index.js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    },
    'externals': {
        // don't bundle the 'react' npm package with our bundle.js
        // but get it from a global 'React' variable
        'react': 'React',
        "react-dom": "ReactDOM"
    },
    module: {
        rules: [{
            // Include ts, tsx, js, and jsx files.
            test: /\.(ts|js)x?$/,
            exclude: [/node_modules/,/stories/],
            loader: ['babel-loader','ts-loader'],
        }],
    }
};