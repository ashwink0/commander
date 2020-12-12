const {Command, flags} = require('@oclif/command')
let fs = require('fs');
const { exec } = require("child_process");

class Run extends Command {
  async run() {
    const {args} = this.parse(Run)

    if(fs.existsSync('.cmmndr')){
      var data=fs.readFileSync('.cmmndr').toString()
      var dataObj=JSON.parse(data)

      if(dataObj[args.Shortcut]) {
        exec(dataObj[args.Shortcut], (err, stdout, stderr) => {
          if (err) {
            //some err occurred
            console.error(err)
          } else {
            // the *entire* stdout and stderr (buffered)
            console.log(`${stdout}`);
            console.log(`${stderr}`);
          }
        });

      }
      else{
        this.log('This command does not exist')
      }
    }
    else{
      this.log('This directory has not been initialized. Run `cmmndr init` to initialize.')
    }
  }
}

Run.examples=[
  '$ cmmndr run expressProject'
]


Run.args=[
  {
    name: 'Shortcut',
    required: true,
    description: 'The command that you want to run.'
  },
]

Run.description = `Runs a commander command.
...
Finds the list of commands stored under the provided shortcut.
`;

module.exports = Run
