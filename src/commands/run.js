const {Command, flags} = require('@oclif/command')
let fs = require('fs');
const { exec } = require("child_process");

class Run extends Command {
  async run() {
    const {args, flags} = this.parse(Run)

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
  '$ cmmndr add expressProject `npm init -y && npm install express cors morgan && code .`'
]


Run.args=[
  {
    name: 'Shortcut',
    required: true,
    description: 'The command that you want to point to a consolidated command'
  },
]

Run.flags={
  force: flags.boolean({char: 'f'}),
}

Run.description = `Adds a commander command to the current directory.
...
Adds a specified list of commands under a shortcut.
If the shortcut already exists, the command can be overwritten by a new command with the --force flag.
Note: If the command has spaces in it, you must put it in quotes.
`;

module.exports = Run
