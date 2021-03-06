const path = require("path");
require("yargs")
  .usage("node cli.js <command> [options]")
  .wrap(require("yargs").terminalWidth() * 0.9)
  .commandDir(path.join(__dirname, "cli"))
  .help("h")
  .version(false)
  .epilog("Run node cli.js <command> --help for detailed usage of given command.")
  .showHelpOnFail(true)
  .demandCommand()
  .parse();
