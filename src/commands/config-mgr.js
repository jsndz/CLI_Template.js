import chalk from "chalk";
import { cosmiconfigSync } from "cosmiconfig";
const configLoader = cosmiconfigSync("tool");
import logger from "../logger.js"
import Ajv from "ajv";
import betterAjvErrors from "better-ajv-errors"
import schema from "../config/schema.json" with { type: "json" };

const ajv = new Ajv({jsonPointers:true});
export function getConfig() {
  const result = configLoader.search(process.cwd());

  if (result) {   
    logger.debug('Found configuration', result.config);

    const isValid = ajv.validate(schema, result.config);
    if (!isValid) {      
      logger.warning('Invalid configuration was supplied');

      console.log(ajv.errors);
      console.log(betterAjvErrors(schema, result.config, ajv.errors));
      process.exit(1);
    }
    return result.config;
  } else {
      logger.warning('Could not find configuration, using default');

    return { port: 1234 };
  }
}
