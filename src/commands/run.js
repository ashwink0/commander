const {cli} = require("cli-ux");
const {Command} = require('@oclif/command')
let fs = require('fs');
const { exec } = require("child_process");

class Run extends Command {
  async run() {
    const {args} = this.parse(Run)

		cli.action.start('Loading...')

		if(fs.existsSync('.cmmndr')){
      var data=fs.readFileSync('.cmmndr').toString()
      var dataObj=JSON.parse(data)

      if(dataObj[args.Shortcut]) {
				cli.action.stop()
				exec(dataObj[args.Shortcut], (err, stdout, stderr) => {
          if (err) {
            console.error(err)
          } else {
            console.log(`${stdout}`);
            console.log(`${stderr}`);
          }
        });

      }
      else{
				cli.action.stop('error')
        this.log('This command does not exist')
      }
    }
    else{
			cli.action.stop('error')
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
