const {Command, flags} = require('@oclif/command')
let fs = require('fs');
const { exec } = require("child_process");

class View extends Command {
	async run() {
		const {args} = this.parse(View)

		if(fs.existsSync('.cmmndr')){
			var data=fs.readFileSync('.cmmndr').toString()
			var dataObj=JSON.parse(data)

			if(dataObj[args.Shortcut]) {
				this.log(`${args.Shortcut}: ${dataObj[args.Shortcut]}`)
			}
			else{
				this.log('This command does not exist.')
			}
		}

		else{
			this.log('This directory has not been initialized. Run `cmmndr init` to initialize.')
		}
	}
}

View.examples=[
	'$ cmmndr view expressProject'
]


View.args=[
	{
		name: 'Shortcut',
		required: true,
		description: 'The shortcut that you want to view.'
	},
]

View.description = `Displays the command list for a shortcut.
...
Finds the supplied command and lists the commands associated with the shortcut.
`;

module.exports = View
