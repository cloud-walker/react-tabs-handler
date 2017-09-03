import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import uglify from 'rollup-plugin-uglify'

const minify = false

export default {
  input: 'source/index.js',
  output: [
    {file: `dist/react-tabs-handler.es.js`, format: 'es'},
    {
      file: 'dist/react-tabs-handler.umd.js',
      format: 'umd',
      name: 'TabsHandler',
      globals: {react: 'React', 'prop-types': 'PropTypes'},
    },
  ],
  exports: 'named',
  name: 'TabsHandler',
  external: ['react', 'prop-types'],
  plugins: [
    nodeResolve({jsnext: true, main: true}),
    commonjs({include: 'node_modules/**'}),
    babel({exclude: 'node_modules/**'}),
    minify && uglify(),
  ].filter(Boolean),
}
