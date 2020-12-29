const {Command} = require('@oclif/command')
let fs = require('fs');

class Remove extends Command {
	async run() {
		const {args} = this.parse(Remove)

		if(fs.existsSync('.cmmndr')){
			var data=fs.readFileSync('.cmmndr').toString()
			var dataObj=JSON.parse(data)

			if(dataObj[args.Shortcut]) {
				delete dataObj[args.Shortcut]
			}
			else{
				this.log('This command does not exist.')
			}
			fs.writeFileSync('.cmmndr', JSON.stringify(dataObj));
		}

		else{
			this.log('This directory has not been initialized. Run `cmmndr init` to initialize.')
		}
	}
}

Remove.examples=[
	'$ cmmndr remove expressProject'
]

Remove.args=[
	{
		name: 'Shortcut',
		required: true,
		description: 'The command that you want to remove.'
	},
]

Remove.description = `Removes a commander command.
...
Finds the supplied command and removes it from the directory.
`;

module.exports = Remove
