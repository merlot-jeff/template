import resolve from 'rollup-plugin-node-resolve';

export default {
  input: 'util/bundle.js',
  output: {
    file: 'docs/libs/bundle.js',
    format: 'es',
  },
  plugins: [
    resolve({
      customResolveOptions: {
        moduleDirectory: [
          'docs/libs/vendor',
          'node_modules',
        ],
      },
    }),
  ],
};
