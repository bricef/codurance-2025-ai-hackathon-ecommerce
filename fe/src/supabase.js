import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://mguedjuqereibecvopcn.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1ndWVkanVxZXJlaWJlY3ZvcGNuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU2NjE2OTcsImV4cCI6MjA2MTIzNzY5N30.oHfANJe9LpYoN9gtsZrOX8mXB4cnKILnFdIu3tuLYy4'
const supabase = createClient(supabaseUrl, supabaseKey)

export const client = supabase;



