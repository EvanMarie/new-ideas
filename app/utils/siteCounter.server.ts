import { redis } from "./redis.server";

const siteCounterKey = "site-counter";
const visitLogKey = "visitor-log";
const timeseriesKey = (pathname: string) => `timeseries:${pathname}`;
const lastSampleTime = "last-sample-time";

export const incrementSiteCounter = async (request: Request) => {
  const count = await redis.hincrby(siteCounterKey, "total", 1);
  const url = new URL(request.url);
  const pathname = url.pathname;
  const pathCount = await redis.hincrby(siteCounterKey, pathname, 1);
  return { total: count, [pathname]: pathCount };
};

export const logVisit = async (request: Request) => {
  const timestamp = Date.now();
  const visitLogData = {
    timestamp: new Date(timestamp).toISOString(),
    url: request.url,
    headers: Object.fromEntries(request.headers),
  };
  return await redis.zadd(visitLogKey, timestamp, JSON.stringify(visitLogData));
};

export const counterTimeSeriesSample = async () => {
  const siteCounter = await redis.hgetall(siteCounterKey);
  const timestamp = Date.now();
  Object.entries(siteCounter).forEach(([key, value]) => {
    redis.rpush(timeseriesKey(key), `${timestamp}:${value}`);
  });
  redis.set(lastSampleTime, timestamp);
};

export const sampleVisitsOncePerHour = async () => {
  const lastSample = await redis.get(lastSampleTime);
  const now = Date.now();
  if (!lastSample || now - parseInt(lastSample) > 3600000) {
    await counterTimeSeriesSample();
  }
};

export const getCounterTimeSeries = async (pathname: string) => {
  return await redis.lrange(timeseriesKey(pathname), 0, -1);
};

export const getSiteStats = async () => {
  const siteCounter = await redis.hgetall(siteCounterKey);
  const _siteCounter = {} as Record<string, number>;
  const timeSeriesData = await Promise.all(
    Object.keys(siteCounter).map(async (key) => {
      _siteCounter[key] = parseInt(siteCounter[key]);
      const data = await redis.lrange(timeseriesKey(key), 0, -1);
      const sampleData = data.map((entry) => {
        const [timestamp, value] = entry.split(":");
        return { timestamp: parseInt(timestamp), value: parseInt(value) };
      });
      return [key, sampleData] as [
        string,
        { timestamp: number; value: number }[]
      ];
    })
  );
  console.log("timeSeriesData length", timeSeriesData.length);
  return { siteCounter: _siteCounter, timeSeriesData };
};
