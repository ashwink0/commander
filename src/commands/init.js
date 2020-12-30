const {cli} = require("cli-ux");
const {Command, flags} = require('@oclif/command')
let fs = require('fs');

class Init extends Command{
	async run() {
		const {flags} = this.parse(Init)
		cli.action.start('Initializing...')

		if(!fs.existsSync('.cmmndr') || flags.force){
			fs.writeFile('.cmmndr', "{}", function(err) {
				if(err){
					cli.action.stop('error')
					return
				}
			});
		}

		else{
			this.log('This directory has already been initialized. Use the --force flag to reinitialize the directory.')
		}

		cli.action.stop()
	}
}

Init.flags = {
	force: flags.boolean({char: 'f'}),
}

Init.description = `Initialize a project with a commander file.
...
Generates a .cmmndr file in the current directory to store consolidated commands
`;

module.exports = Init
