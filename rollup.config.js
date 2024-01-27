import path from 'path'
import fs from 'fs'

import terser from '@rollup/plugin-terser'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

const isProduction = process.env.NODE_ENV === 'production'

let pckg = {}
try {
  const packageJsonContent = fs.readFileSync('./package.json', 'utf8')
  pckg = JSON.parse(packageJsonContent)
} catch (error) {
  console.error(`Error reading or parsing './package.json' for Rollup bundle:`, error)
}

pckg.banner = pckg.banner.replace('|_.NAME._|', pckg.name)
pckg.banner = pckg.banner.replace('|_.AUTHOR._|', pckg.author)
pckg.footer = pckg.footer.replace('|_.VERSION._|', pckg.version)
pckg.footer = pckg.footer.replace('|_.TIME_OF_BUNDLE._|', Date(Date.now()).toString())

export default {
  input: path.resolve(__dirname, `./${pckg.srcDir}/${pckg.srcIndex}.js`),
  output: [
    ...pckg.formats.map((format) => ({
      file: `./${pckg.outDir}/${format}.js`,
      name: pckg.name.replace(/-/g, '_'),
      format,
      banner: pckg.banner,
      footer: pckg.footer,
      sourcemap: isProduction,
      minifyInternalExports: isProduction,
      sanitizeFileName: isProduction,
      noConflict: isProduction,
      generatedCode: {
        arrowFunctions: isProduction,
        constBindings: isProduction,
        conciseMethodProperty: isProduction,
        objectShorthand: isProduction,
        parameterDestructuring: isProduction,
        reservedNamesAsProps: isProduction,
        stickyRegExp: isProduction,
        templateString: isProduction
      }
    }))
  ],
  plugins: [
    resolve(),
    commonjs(),
    ...(isProduction
      ? [
          terser({
            maxWorkers: 4,
            compress: {
              ecma: 2015
            }
          })
        ]
      : [])
  ]
}
