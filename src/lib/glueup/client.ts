/**
 * GlueUp API client — PHASE 2 STUB (not wired into any page yet).
 *
 * GlueUp uses HMAC-signed requests. See https://glueupapi.docs.apiary.io.
 * When credentials arrive (see the spec's "what to request from GlueUp"
 * checklist), implement signing + fetch here, then back the data-layer
 * functions in ../events.ts, ../members.ts, etc. with these calls. Page code
 * does not change because the function signatures stay the same.
 *
 * Required env (set in .env / deploy secrets, never committed):
 *   GLUEUP_API_KEY, GLUEUP_API_SECRET, GLUEUP_BASE_URL
 */

export interface GlueUpConfig {
  apiKey: string;
  apiSecret: string;
  baseUrl: string;
}

export function readGlueUpConfig(): GlueUpConfig | null {
  const apiKey = import.meta.env.GLUEUP_API_KEY;
  const apiSecret = import.meta.env.GLUEUP_API_SECRET;
  const baseUrl = import.meta.env.GLUEUP_BASE_URL;
  if (!apiKey || !apiSecret || !baseUrl) return null;
  return { apiKey, apiSecret, baseUrl };
}

export async function glueUpRequest(): Promise<never> {
  throw new Error(
    'GlueUp client not configured. This is a Phase 2 stub — see src/lib/glueup/client.ts.',
  );
}
