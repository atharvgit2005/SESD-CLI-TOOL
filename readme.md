# SESD CLI TOOL

A modular Command Line Interface (CLI) library and tool built with TypeScript and `commander.js`.

## Prerequisites
- [Node.js](https://nodejs.org/) installed
- `npm` installed

## Installation & Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Build the project:**
   The project uses TypeScript. You will need to compile the source code into JavaScript.
   ```bash
   npx tsc
   ```

3. **Link the CLI tool globally (Optional but Recommended):**
   To use the tool globally as a command, use `npm link`. This maps the command name `koko` (as defined in `package.json`) to the executable.
   ```bash
   npm link
   ```

## Usage

### Using the Linked Command
If you have linked the project via `npm link`, you can run the CLI tool using the `koko` command:
```bash
koko greet "Your Name"
```

### Running Locally (Without Building)
You can test the CLI locally without compiling by using `ts-node`:
```bash
npx ts-node snitchcli.ts greet "Your Name"
```

### Running the Compiled Output
You can run the generated `.js` file directly using Node:
```bash
node dist/snitchcli.js greet "Your Name"
```

## Available Commands

Here are the currently registered commands:

- `greet <name>`: Prints a greeting message with the provided name.
  - Example: `koko greet Alice`
  - Output: `Hello Alice`

## Project Structure

- `snitchcli.ts`: The main entry point of the application. It creates an instance of `CLI_Engine` and registers commands.
- `CLI_Engine.ts`: The core engine class wrapping `commander.js`. It handles registering command instances and parsing arguments.
- `commands/`: Contains the implementation for all CLI commands.
  - `greet_cmd.ts`: Implementation of the `greet` command.

## Adding a New Command

To add a new command:
1. Create a new command file inside the `commands/` directory.
2. Ensure the command class takes the `program` instance in the constructor and implements a `register()` method.
3. Import the new command class into `snitchcli.ts`.
4. Register it within the `cli_engine` instance by adding it to the `registerCommand` array list.
