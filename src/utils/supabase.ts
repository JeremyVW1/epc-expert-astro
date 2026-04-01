import { createClient, type SupabaseClient } from "@supabase/supabase-js";

let _client: SupabaseClient | null = null;

export function getSupabase(): SupabaseClient {
  if (_client) return _client;
  const url = import.meta.env.PUBLIC_SUPABASE_URL ?? "";
  const key = import.meta.env.PUBLIC_SUPABASE_ANON_KEY ?? "";
  if (!url || !key) {
    throw new Error("Supabase env vars not configured");
  }
  _client = createClient(url, key);
  return _client;
}
