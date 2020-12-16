const {Command, flags} = require('@oclif/command')
let fs = require('fs');

class Add extends Command {
  async run() {
    const {args, flags} = this.parse(Add)

    if(fs.existsSync('.cmmndr')){
      var data=fs.readFileSync('.cmmndr').toString()
      var dataObj=JSON.parse(data)

      if(dataObj[args.Shortcut] && !flags.force) {
        this.log('This command is already in use. Use the --force flag to overwrite it.')
        return;
      }
      dataObj[args.Shortcut]=args.Command;
      fs.writeFileSync('.cmmndr', JSON.stringify(dataObj));
    }

    else{
      this.log('This directory has not been initialized. Run `cmmndr init` to initialize.')
    }
  }
}

Add.examples=[
  '$ cmmndr add expressProject `code . && npm install && nodemon server.js`'
]


Add.args=[
  {
    name: 'Shortcut',
    required: true,
    description: 'The command that you want to point to a consolidated command'
  },
  {
    name: 'Command',
    required: true,
    description: 'The list of commands you want run with your shortcut.'
  }
]

Add.flags={
  force: flags.boolean({char: 'f'}),
}

Add.description = `Adds a commander command to the current directory.
...
Adds a specified list of commands under a shortcut.
If the shortcut already exists, the command can be overwritten by a new command with the --force flag.
Note: If the command has spaces in it, you must put it in quotes.
`;

module.exports = Add
