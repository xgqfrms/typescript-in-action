const merge = require('webpack-merge');

const baseConfig = require('../build/webpack.base.config');
const devConfig = require('../build/webpack.dev.config');
const proConfig = require('../build/webpack.prod.config');

const log = console.log;

// log(`process.env =\n`, process.env)
log(`process.argv =\n`, process.argv)
// [
//   '/Users/xgqfrms-mbp/.nvm/versions/node/v10.16.3/bin/node',
//   '/Users/xgqfrms-mbp/Documents/GitHub/typescript-in-action/node_modules/.bin/webpack',
//   '--mode=production',
//   '--config',
//   './build/webpack.config.js'
// ]

module.exports = (env, args) => {
  log(`process.env.NODE_ENV =`, process.env.NODE_ENV)
  log(`env =`, env)
  log(`args =\n`, args)
  // process.env.NODE_ENV = undefined
  // env = undefined
  // args =
  // {
  //   _: [],
  //   cache: null,
  //   bail: null,
  //   profile: null,
  //   color: { level: 3, hasBasic: true, has256: true, has16m: true },
  //   colors: { level: 3, hasBasic: true, has256: true, has16m: true },
  //   mode: 'production',
  //   config: './build/webpack.config.js',
  //   'info-verbosity': 'info',
  //   infoVerbosity: 'info',
  //   '$0': '/Users/xgqfrms-mbp/Documents/GitHub/typescript-in-action/node_modules/.bin/webpack'
  // }
  const config = args.mode === 'development' ? devConfig : proConfig;
  return merge(baseConfig, config);
};
