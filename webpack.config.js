const ProdWebpack = require('./config/webpack.prod');
const DevWebpack = require('./config/webpack.dev');

switch (process.env.NODE_ENV) {
    case 'dev':
        module.exports = DevWebpack;
        break;
    case 'prod':
        module.exports = ProdWebpack;
        break;
    default:
        module.exports = DevWebpack;
}

