// src/utils/safeJsonParse.ts

export type SafeJsonParseResult<T> =
  | { ok: true; value: T }
  | { ok: false; error: string };

/**
 * Safely parse a JSON string without throwing.
 */
export function safeJsonParse<T = unknown>(input: string): SafeJsonParseResult<T> {
  try {
    if (typeof input !== "string" || input.trim().length === 0) {
      return { ok: false, error: "Input must be a non-empty string" };
    }
    return { ok: true, value: JSON.parse(input) as T };
  } catch (err) {
    return {
      ok: false,
      error: err instanceof Error ? err.message : "Unknown JSON parse error",
    };
  }
}
