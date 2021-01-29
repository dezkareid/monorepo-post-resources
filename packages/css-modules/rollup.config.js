import commonjs from  'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import htmlTemplate from 'rollup-plugin-generate-html-template';
import livereload from 'rollup-plugin-livereload';
import postcss from 'rollup-plugin-postcss';
import serve from 'rollup-plugin-serve';
import replace from '@rollup/plugin-replace';

const config = {
  input: 'src/index.js',
  output: {
    file: 'dist/main.js',
    format: 'iife'
  },
  plugins: [
    resolve(),
    babel({
      exclude: /node_modules/,
      presets: ['@babel/preset-env', '@babel/preset-react']
    }),
    commonjs({
      namedExports: { 'react-dom': ['render'] },
    }),
    postcss({
      autoModules: true,
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    }),
    htmlTemplate({
      template: './public/index.html',
      target: 'index.html',
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify( 'development' )
    }),
    serve({
      contentBase: 'dist',
      historyApiFallback: true,
      port: 8000
    }),
    livereload({
      watch: 'dist'
    })
  ]
};

export default config;