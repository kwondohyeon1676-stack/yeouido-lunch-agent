import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Warning if missing keys
if (!supabaseUrl || !supabaseKey) {
    console.warn('Supabase keys are missing. Check .env.local');
}

// Export null if keys are missing to prevent crash
// We cast to any because the app expects a client, but we will handle the null check in the UI
export const supabase = (supabaseUrl && supabaseKey)
    ? createClient(supabaseUrl, supabaseKey)
    : null;
