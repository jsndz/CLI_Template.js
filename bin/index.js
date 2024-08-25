#!/usr/bin/env node
import arg from "arg";
import chalk from "chalk";
import { getConfig } from "../src/commands/config-mgr.js";
import { start } from "../src/commands/start.js";
import logger from "../src/logger.js";
try {
  const args = arg({
    "--start": Boolean,
    "--build": Boolean,
  });
  logger.debug("Received args", args);
  if (args["--start"]) {
    const config = getConfig();
    start(config);
  }
} catch (e) {
  logger.warning(e.message);
  usage();
}
function usage() {
  console.log(`${chalk.bgBlue("tool [CMD]")}
  --start\tStarts the app
  --build\tBuilds the app`);
}
