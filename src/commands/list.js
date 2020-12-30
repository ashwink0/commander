const {cli} = require("cli-ux");
const {Command} = require('@oclif/command')
let fs = require('fs');

class List extends Command{
	async run() {
		const {args} = this.parse(List)

		cli.action.start('Loading...')

		if(fs.existsSync('.cmmndr')){
			var data = fs.readFileSync('.cmmndr').toString()
			let dataObj = JSON.parse(data)
			cli.action.stop()
			if(dataObj === {}){
				this.log('There are no commands for this directory.')
			}
			else{
				for(var shortcut in dataObj){
					this.log(shortcut + ": \t" + dataObj[shortcut]);
				}
			}
		}

		else{
			cli.action.stop()
			this.log('This directory has not been initialized. Run `cmmndr init` to initialize.')
		}
	}
}

List.examples = [
	'$ cmmndr list'
]


List.description = `Displays the list of shortcuts and commands in a certain directory.
...
Lists all shortcuts for a directory with their command lists.
`;

module.exports = List
