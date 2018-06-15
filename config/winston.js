const appRoot = require('app-root-path');

// winston logging config
const { createLogger, transports } = require('winston')

let options = {
  app: {
    level: 'info',
    json: false,
    filename: `${appRoot}/logs/app.log`,
    handleExceptions: true,
    maxsize: 5242880, // 5MB
    maxFiles: 2,
    colorize: false,
  },
  event: {
    level: 'info',
    filename: `${appRoot}/logs/events.log`,
    handleExceptions: true,
    timestamp: true,
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
  transports: [
    new transports.File(options.app),
    new transports.Console(options.console)
  ],
  exitOnError: false,
})

// make separate logger for web events
const eventLogger = createLogger({
  transports: [
    new transports.File(options.event),
  ]
})

// setup morgan to write to this log
logger.stream = {
  write: function(message, encoding) {
    logger.info(message);
  },
};

exports.logger = logger;
exports.eventLogger = eventLogger;
