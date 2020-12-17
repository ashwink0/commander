cmmndr
======



[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/cmmndr.svg)](https://npmjs.org/package/cmmndr)
[![Downloads/week](https://img.shields.io/npm/dw/cmmndr.svg)](https://npmjs.org/package/cmmndr)
[![License](https://img.shields.io/npm/l/cmmndr.svg)](https://github.com/ashwink0/cmmndr/blob/master/package.json)
[![Build Status](https://travis-ci.com/ashwink0/commander.svg?branch=master)](https://travis-ci.com/ashwink0/commander)
[![Dependencies](https://status.david-dm.org/gh/ashwink0/cmmndr.svg)](https://david-dm.org/ashwink0/cmmndr)

[![NPM](https://nodei.co/npm/cmmndr.png?compact=true)](https://nodei.co/npm/cmmndr/)


<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g cmmndr
$ cmmndr COMMAND
running command...
$ cmmndr (-v|--version|version)
cmmndr/1.3.1 darwin-x64 node-v12.16.1
$ cmmndr --help [COMMAND]
USAGE
  $ cmmndr COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`cmmndr add SHORTCUT COMMAND`](#cmmndr-add-shortcut-command)
* [`cmmndr help [COMMAND]`](#cmmndr-help-command)
* [`cmmndr init`](#cmmndr-init)
* [`cmmndr remove SHORTCUT`](#cmmndr-remove-shortcut)
* [`cmmndr run SHORTCUT`](#cmmndr-run-shortcut)
* [`cmmndr view SHORTCUT`](#cmmndr-view-shortcut)

## `cmmndr add SHORTCUT COMMAND`

Adds a commander command to the current directory.

```
USAGE
  $ cmmndr add SHORTCUT COMMAND

ARGUMENTS
  SHORTCUT  The command that you want to point to a consolidated command
  COMMAND   The list of commands you want run with your shortcut.

OPTIONS
  -f, --force

DESCRIPTION
  ...
  Adds a specified list of commands under a shortcut.
  If the shortcut already exists, the command can be overwritten by a new command with the --force flag.
  Note: If the command has spaces in it, you must put it in quotes.

EXAMPLE
  $ cmmndr add expressProject `code . && npm install && nodemon server.js`
```

_See code: [src/commands/add.js](https://github.com/ashwink0/commander/blob/v1.3.1/src/commands/add.js)_

## `cmmndr help [COMMAND]`

display help for cmmndr

```
USAGE
  $ cmmndr help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.0/src/commands/help.ts)_

## `cmmndr init`

Initialize a project with a commander file.

```
USAGE
  $ cmmndr init

OPTIONS
  -f, --force

DESCRIPTION
  ...
  Generates a .cmmndr file in the current directory to store consolidated commands
```

_See code: [src/commands/init.js](https://github.com/ashwink0/commander/blob/v1.3.1/src/commands/init.js)_

## `cmmndr remove SHORTCUT`

Removes a commander command.

```
USAGE
  $ cmmndr remove SHORTCUT

ARGUMENTS
  SHORTCUT  The command that you want to remove.

DESCRIPTION
  ...
  Finds the supplied command and removes it from the directory.

EXAMPLE
  $ cmmndr remove expressProject
```

_See code: [src/commands/remove.js](https://github.com/ashwink0/commander/blob/v1.3.1/src/commands/remove.js)_

## `cmmndr run SHORTCUT`

Runs a commander command.

```
USAGE
  $ cmmndr run SHORTCUT

ARGUMENTS
  SHORTCUT  The command that you want to run.

DESCRIPTION
  ...
  Finds the list of commands stored under the provided shortcut.

EXAMPLE
  $ cmmndr run expressProject
```

_See code: [src/commands/run.js](https://github.com/ashwink0/commander/blob/v1.3.1/src/commands/run.js)_

## `cmmndr view SHORTCUT`

Displays the command list for a shortcut.

```
USAGE
  $ cmmndr view SHORTCUT

ARGUMENTS
  SHORTCUT  The shortcut that you want to view.

DESCRIPTION
  ...
  Finds the supplied command and lists the commands associated with the shortcut.

EXAMPLE
  $ cmmndr view expressProject
```

_See code: [src/commands/view.js](https://github.com/ashwink0/commander/blob/v1.3.1/src/commands/view.js)_
<!-- commandsstop -->
