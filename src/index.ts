import { BrowserlessServer } from './browserless-server';

const parseParam = (param: any, defaultParam: any) => {
  if (param) {
    return JSON.parse(param);
  }
  return defaultParam;
};

const thirtyMinutes = 30 * 60 * 1000;

const connectionTimeout =       parseParam(process.env.CONNECTION_TIMEOUT, 30000);
const maxConcurrentSessions =   parseParam(process.env.MAX_CONCURRENT_SESSIONS, 10);
const queueLength =             parseParam(process.env.MAX_QUEUE_LENGTH, 10);
const port =                    parseParam(process.env.PORT, 8080);
const prebootChrome =           parseParam(process.env.PREBOOT_CHROME, false);
const demoMode =                parseParam(process.env.DEMO_MODE, false);
const enableDebugger =          parseParam(process.env.ENABLE_DEBUGGER, true);
const maxMemory =               parseParam(process.env.MAX_MEMOMORY_PERCENT, 99);
const maxCPU =                  parseParam(process.env.MAX_CPU_PERCENT, 99);
const keepAlive =               parseParam(process.env.KEEP_ALIVE, false);
const chromeRefreshTime =       parseParam(process.env.CHROME_REFRESH_TIME, thirtyMinutes);
const maxChromeRefreshRetries = parseParam(process.env.MAX_CHROME_REFRESH_RETRIES, 5);
const token =                   process.env.TOKEN || null;
const queuedAlertURL =          process.env.QUEUE_ALERT_URL || null;
const rejectAlertURL =          process.env.REJECT_ALERT_URL || null;
const timeoutAlertURL =         process.env.TIMEOUT_ALERT_URL || null;
const healthFailureURL =        process.env.FAILED_HEALTH_URL || null;
const metricsJSONPath =         process.env.METRICS_JSON_PATH || null;

const maxQueueLength = queueLength + maxConcurrentSessions;

new BrowserlessServer({
  chromeRefreshTime,
  connectionTimeout,
  demoMode,
  enableDebugger,
  healthFailureURL,
  keepAlive,
  maxCPU,
  maxChromeRefreshRetries,
  maxConcurrentSessions,
  maxMemory,
  maxQueueLength,
  metricsJSONPath,
  port,
  prebootChrome,
  queuedAlertURL,
  rejectAlertURL,
  timeoutAlertURL,
  token,
})
.startServer();
