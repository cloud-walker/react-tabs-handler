import babel from 'rollup-plugin-babel'

export default {
  entry: 'source/index.js',
  targets: [{dest: `dist/react-navs.cjs.js`, format: 'cjs'}],
  external: ['react', 'prop-types'],
  format: 'es',
  exports: 'named',
  moduleName: 'ReactNavs',
  plugins: [babel({exclude: 'node_modules/**'})].filter(Boolean),
}
