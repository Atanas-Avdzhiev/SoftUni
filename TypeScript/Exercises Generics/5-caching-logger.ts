enum LoggingLevel {
    Info = "Info",
    Error = "Error",
    Warning = "Warning",
    Debug = "Debug",
}

enum LoggingFormat {
    Standard = "[%level][%date] %text",
    Minimal = "*%level* %text"
}

interface CachingLogger<T extends LoggingLevel, V extends LoggingFormat> {
    cachedLogs: Map<T, string[]>
    log(logLevel: T, message: string): void;
    getFormat(): V
}

class Logger<T extends LoggingLevel, V extends LoggingFormat> implements CachingLogger<T, V> {

    cachedLogs: Map<T, string[]> = new Map<T, string[]>();
    loggingFormat: V;

    constructor(loggingFormat: V) {
        this.loggingFormat = loggingFormat;
    }

    log(logLevel: T, message: string): void {
        const formattedMessage = this.loggingFormat.replace("%level", logLevel).replace("%date", new Date().toISOString()).replace("%text", message)
        console.log(formattedMessage);

        const logs = this.cachedLogs.get(logLevel) || [];
        logs.push(formattedMessage);
        this.cachedLogs.set(logLevel, logs);
    }

    getFormat(): V {
        return this.loggingFormat;
    }
}

let logger = new Logger<LoggingLevel, LoggingFormat>(LoggingFormat.Standard);
logger.log(LoggingLevel.Info, "This is an info message.");
logger.log(LoggingLevel.Info, "Another message.");
logger.log(LoggingLevel.Error, "Something went wrong.");
logger.log(LoggingLevel.Warning, "Be careful with the type assertions.");
logger.log(LoggingLevel.Debug, "Running the debugger.");
console.log('-----------')
console.log([...logger.cachedLogs.entries()].map(x => x[1].join('\n')).join('\n'))