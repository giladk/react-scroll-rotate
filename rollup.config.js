import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'

module.exports = {
    input: 'src/index.js',
    output: [
        {
            file: 'dist/bundle.js',
            format: 'cjs',
            sourcemap: true
        },
        {
            file: 'dist/es.module.js',
            format: 'es',
            sourcemap: true
        },
    ],
    // plugins: [
    //     resolve(),
    //     commonJS({
    //       include: 'node_modules/**'
    //     })
    // ]
    plugins: [
        // replace({
        //   "process.env.NODE_ENV": JSON.stringify(NODE_ENV)
        // }),
        babel({
          exclude: "node_modules/**",
          "presets": [
            ["@babel/preset-env", {"modules": false}],
            ["@babel/preset-react", {"modules": false}],
          ]
        }),
        resolve(),
        commonjs({
            include: 'node_modules/**'
        })
    ],
    external: ['react', 'prop-types']
  };