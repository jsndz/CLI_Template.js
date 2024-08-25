import chalk from "chalk";
import createDebug from "debug";

const debug = createDebug("myapp:logger");
const logger = {
  log: (...args) => console.log(chalk.gray(...args)),
  warning: (...args) => console.log(chalk.yellow(...args)),
  highlight: (...args) => console.log(chalk.bgCyanBright(...args)),
  debug: debug,
};

export default logger;
