const {Command, flags} = require('@oclif/command')
let fs = require('fs');
const {log} = require("@oclif/dev-cli/lib/log");

class Init extends Command {
  async run() {
		const {flags} = this.parse(Init)

		if(!fs.existsSync('.cmmndr') || flags.force){
      fs.writeFile('.cmmndr', "{}", function(err) {
        if(err) log('An error occurred.');
      });
      this.log('Initialized Successfully')
    }

    else{
      this.log('This directory has already been initialized. Use the --force flag to reinitialize the directory.')
    }
  }
}

Init.flags={
	force: flags.boolean({char: 'f'}),
}

Init.description = `Initialize a project with a commander file.
...
Generates a .cmmndr file in the current directory to store consolidated commands
`;

module.exports = Init
