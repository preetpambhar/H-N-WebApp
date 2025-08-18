// lib/rateLimiter.ts
type Hit = { ts: number; count: number };
const WINDOW_MS = 60 * 1000; // 1 minute
const MAX_HITS = 10; // 10 requests/minute per IP
const hits = new Map<string, Hit>();

export function checkRateLimit(ip: string) {
  const now = Date.now();
  const record = hits.get(ip);

  if (!record) {
    hits.set(ip, { ts: now, count: 1 });
    return { ok: true };
  }

  // Reset window
  if (now - record.ts > WINDOW_MS) {
    hits.set(ip, { ts: now, count: 1 });
    return { ok: true };
  }

  // Within window
  if (record.count >= MAX_HITS) {
    return {
      ok: false,
      retryAfter: Math.ceil((record.ts + WINDOW_MS - now) / 1000),
    };
  }

  record.count += 1;
  hits.set(ip, record);
  return { ok: true };
}
