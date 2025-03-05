
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://pjumoozoryiswebwddxp.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBqdW1vb3pvcnlpc3dlYndkZHhwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDExMDY3ODEsImV4cCI6MjA1NjY4Mjc4MX0.sPm-0IDOAt3M8QGXWttlcE28udabGdNyOXXi1rGzIVg";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;