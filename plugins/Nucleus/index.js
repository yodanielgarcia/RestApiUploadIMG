/**
 * A plugin to compile Nucleus and load the compiled app.css file.
 * This is necessary when the [id] is used as part of the file name.
 *
 * Vue CLI by default uses App as the default bundle.
 * We asume a app.[id].css file exists in order to run Nucleus.
 */

const chalk = require('chalk')
const { exec } = require('child_process')
const path = require('path');
const log = console.log

class Nucleus {
  apply (compiler) {
    compiler.hooks.emit.tap('Nucleus', compiler => {
      let file
      compiler.chunks.find(chunk => {
        if (chunk.name !== 'app') {
          return
        }
        file = chunk.files.find(file => {
          return file.endsWith('.css')
        })
        return file
      })

      if (!file) {
        // No css to include.
        return
      }

      // Run Nucleus with the css from webpack compilation.
      const command = path.resolve('./node_modules/.bin/nucleus --config config.nucleus.json --css ../', file);
      if (process.env.NODE_ENV === 'development') {
        exec(command, (err, stdout, stderr) => {
          if (err) {
            log(chalk.red('Error compiling Nucleus'))
            log(chalk.red('---'))
            log(chalk.red(err))
            return
          }
          if (stdout) {
            log(chalk.green('Nucleus output:'))
            log(chalk.green('Loaded CSS file: ' + file))
            log(stdout)
          }
          if (stderr) {
            log(chalk.red('Nucleus error:'))
            log(chalk.red(stderr))
          }
        })
      }
    })
  }
}

module.exports = Nucleus
