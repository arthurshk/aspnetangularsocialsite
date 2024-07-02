const webpack = require('webpack');

module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NG_AUTH0_DOMAIN: JSON.stringify(process.env.NG_AUTH0_DOMAIN),
        NG_AUTH0_CLIENT_ID: JSON.stringify(process.env.NG_AUTH0_CLIENT_ID)
      }
    })
  ]
};
