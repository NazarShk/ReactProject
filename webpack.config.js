let path = require('path');

let conf = {
    entry : './src/index.js',
    output : {
        path : path.resolve(__dirname, './dist'),
        filename : 'main.js',
        publicPath : 'dist/'
    },
    devServer : {
        overlay : true
    }
};


module.exports = (env, options) => {
    let production = options.mode === 'production';

    conf.devtool = production ? false:'eval-sourcemap';

    return conf;
}
