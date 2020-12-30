const {Command, flags} = require('@oclif/command')
let fs = require('fs');
const {log} = require("@oclif/dev-cli/lib/log");

class List extends Command {
	async run() {
		const {args} = this.parse(List)

		if(fs.existsSync('.cmmndr')){
			var data=fs.readFileSync('.cmmndr').toString()
			var dataObj=JSON.parse(data)

			for (var shortcut in dataObj) {
				log(shortcut + ": \t" + dataObj[shortcut]);
			}
		}

		else{
			this.log('This directory has not been initialized. Run `cmmndr init` to initialize.')
		}
	}
}

List.examples=[
	'$ cmmndr list'
]

List.args=[

]

List.description = `Displays the list of shortcuts and commands in a certain directory.
...
Lists all shortcuts for a directory with their command lists.
`;

module.exports = List
