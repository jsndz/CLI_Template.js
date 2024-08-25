# CLI_Template.js

A working skeleton for a command line tool. We created the binary, processed the CLI arguments, found and validated the configuration, and created a way to communicate with our users via logs.

## Features

- A template to create your own CLI tool with Javascript

## Installation

To install and use the tool, follow these steps:

1. Step 1: clone the project using `git clone https://github.com/jsndz/CLI_Template.js.git`.
2. Step 2: Run `npm i` inside the project.

## Usage

To use the tool, execute the following command:

1. Step 1: Run `npm link` to create a global module.
2. Step 2: Create a TestTheProject folder in the same level directory as the project.
3. Step 3: Run `npm link CLI_Template.js`.
4. Step 4: Run `tool --start`.
5. Step 5: Create your own CLI tool.

- Note:(Optional) If you want to specify a different port, add a tool.config.js file with an port specified on it
  for example: { port:3000}

## What i learned:

- Using a package like pkg-up to find the package.json file is helpful when your script or tool needs to work with this file but you don’t know its exact location.
- When you create a Node.js package, you might want to make it available as a command-line tool that can be run directly from the terminal.
- By setting the bin property in the package.json file, you specify the path to the executable file that should be run when the package is invoked as a command.
- npm link is a command that creates a symbolic link between your global node_modules directory and a local package you're developing. It's particularly useful for developing Node.js packages that you want to test as if they were installed globally, without having to actually publish them to the npm registry.
- JSON schema validator checks if a given JSON data structure follows a defined schema, ensuring that your data is correct and consistent.

Note : While running the tool you might get warnings for importing JSON, because importing JSON is still in its experimental stage
