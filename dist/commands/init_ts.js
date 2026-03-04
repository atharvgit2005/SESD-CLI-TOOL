const { execSync } = require('child_process');
class Init_TS {
    constructor(program) {
        this.program = program;
    }
    register() {
        this.program
            .command("init-ts <foldername>")
            .action((foldername) => this.InitializeTS(foldername));
    }
    InitializeTS(foldername) {
        this.run(`mkdir${foldername}`);
    }
    run(command) {
        execSync(command, { stdio: "inherit" });
    }
}
