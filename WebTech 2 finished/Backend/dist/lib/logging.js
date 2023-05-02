"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Logging {
}
exports.default = Logging;
Logging.success = (args) => console.log(`\x1b[32m ${args}\x1b[0m`);
Logging.warning = (args) => console.log(`\x1b[33m ${args}\x1b[0m`);
Logging.info = (args) => console.log(`\x1b[36m ${args}\x1b[0m`);
Logging.error = (args) => console.log(`\x1b[31m ${args}\x1b[0m`);
