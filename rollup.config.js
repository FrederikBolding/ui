import sourceMaps from 'rollup-plugin-sourcemaps';
import typescript from 'rollup-plugin-typescript2';
import includePaths from 'rollup-plugin-includepaths';
import pkg from './package.json';

/**
 * Include all of the dependencies here to exclude all node modules from the build
 * Make sure to also include node libraries you're using e.g. 'crypto'
 */

const external = [
  ...Object.keys(pkg.dependencies),
  ...Object.keys(pkg.peerDependencies),
];

export default {
  input: 'src/index.ts',

  output: { file: pkg.module, format: 'es', sourcemap: true },

  // exclude all node modules
  external,

  watch: {
    include: 'src/**',
  },
  plugins: [
    // Compile TypeScript files
    typescript(),

    // Resolve source maps to the original source
    sourceMaps(),

    // Use absolute imports instead of relative imports
    includePaths({ paths: ['./src'] }),
  ],
};
