const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  // Set the mode to production to enable various optimizations like minification
  mode: 'production',
  // Entry point for the webpack bundling process
  entry: './dist/index.js',
  // Output configuration for the bundled file
  output: {
    // The filename of the bundled file
    filename: 'analytics-react.min.js',
    // The path where the bundled file will be saved
    path: path.resolve(__dirname, 'dist'),
    // The name of the library when used as a script
    library: 'analytics-react',
    // The type of module definition to use
    libraryTarget: 'umd',
    // Ensures that the library works with different environments (Node.js, browser)
    globalObject: 'this',
  },
  // Optimization settings for minimizing the output bundle
  optimization: {
    // Enable minimization
    minimize: true,
    // Use TerserPlugin to minify the JavaScript code
    minimizer: [new TerserPlugin()],
  }, // Module rules for handling different types of files
  module: {
    rules: [
      {
        // Test for TypeScript files
        test: /\.tsx?$/,
        // Use ts-loader to transpile TypeScript files to JavaScript
        use: 'ts-loader',
        // Exclude the node_modules folder from the bundling process
        exclude: /node_modules/,
      },
    ],
  },
  // File extensions that webpack will resolve automatically
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};
