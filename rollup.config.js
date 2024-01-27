import path from "path";

// import terser from '@rollup/plugin-terser'
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

const formats = ["iife", "cjs", "es"];
const name = "x-powered-by-random";
const srcDir = "src";
const srcIndex = "index";
const outDirName = "dist";
const input = path.resolve(__dirname, `./${srcDir}/${srcIndex}.js`);

const isProduction = process.env.NODE_ENV === "production";

const sourcemap = isProduction;
const minifyInternalExports = isProduction;
const sanitizeFileName = isProduction;

const testLibConfig = {
  input,
  output: [
    // 3 Versions output
    ...formats.map((format) => ({
      file: `./${outDirName}/${name}.${format}.js`,
      name,
      format,
      sourcemap,
      minifyInternalExports,
      sanitizeFileName,
      noConflict: true,
      generatedCode: {
        arrowFunctions: true,
        constBindings: true,
        conciseMethodProperty: true,
        objectShorthand: true,
        parameterDestructuring: true,
        reservedNamesAsProps: true,
        stickyRegExp: true,
        templateString: true,
      },
    })),

    // ES export into Source Code
    // {
    //   file: pthRes('../app/src/utils/index.js'),
    //   format: 'es'
    // }
  ],
  plugins: [
    resolve(),
    commonjs(),
    // babel({
    //   exclude: 'node_modules/**'
    // })
  ],
};

export default testLibConfig;
