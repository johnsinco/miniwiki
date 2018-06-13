const appRoot = require('app-root-path');

// winston logging config
const { createLogger, format, transports } = require('winston')
const { colorize, combine, timestamp, printf } = format

const logFormat = printf(info => {
  return `${info.timestamp} ${info.level}: ${JSON.stringify(info.message)}`
})

var options = {
  file: {
    level: 'info',
    filename: `${appRoot}/logs/app.log`,
    handleExceptions: true,
    prettyPrint: true,
    timestamp: true,
    json: false,
    maxsize: 5242880, // 5MB
    maxFiles: 2,
    colorize: false,
  },
  console: {
    level: 'debug',
    handleExceptions: true,
    timestamp: true,
    json: false,
    colorize: false,
  },
};

const logger = createLogger({
  format: combine(
    timestamp(),
    logFormat
  ),
  transports: [
    new transports.File(options.file),
    new transports.Console(options.console)
  ],
  exitOnError: false,
})

// setup morgan to write to this log
logger.stream = {
  write: function(message, encoding) {
    logger.info(message);
  },
};

module.exports = logger;
