const { Command } = require("commander");
class CLI_Engine {
    constructor() {
        this.program = new Command();
    }
    registerCommand(commands) {
        commands.forEach((commandClass) => {
            const commandInstance = new commandClass(this.program);
            commandInstance.register();
        });
    }
    run() {
        this.program.parse(process.argv);
    }
}
module.exports = CLI_Engine;
