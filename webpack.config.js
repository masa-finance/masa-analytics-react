const path = require('path');

module.exports = {
  // The entry point of your library (in this case, the main export file)
  entry: './src/index.ts',

  // The mode of the build process: 'production' will minify the output
  mode: 'production',

  // The module rules define how different file types are processed
  module: {
    rules: [
      {
        // The regex to match TypeScript files
        test: /\.tsx?$/,

        // Use the 'ts-loader' to transpile TypeScript files
        use: 'ts-loader',

        // Exclude the 'node_modules' folder from the transpilation process
        exclude: /node_modules/,
      },
    ],
  },

  // Define which file extensions should be resolved by Webpack
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },

  // Configure the output properties
  output: {
    // The name of the output file
    filename: 'zksbt-cookie.bundle.js',

    // The output directory for the bundled file
    path: path.resolve(__dirname, 'dist'),

    // The name of the global variable that users can use to access your package
    library: 'zksbtCookie',

    // The library target format: 'umd' works with both CommonJS and AMD module systems
    libraryTarget: 'umd',
  },
};
