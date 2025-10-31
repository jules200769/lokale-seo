import { createClient } from '@supabase/supabase-js'

// Supabase configuration - gebruikt environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://dnubhzkfjeeyzmauqbux.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRudWJoemtmamVleXptYXVxYnV4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE1NjExODUsImV4cCI6MjA3NzEzNzE4NX0.ZK79TRl5pm0H6tXyl517ipHJ4weYD9KXAfUABoc5qYc'

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
