import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://guszyxrywaalxytytgvn.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd1c3p5eHJ5d2FhbHh5dHl0Z3ZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIxODIzOTQsImV4cCI6MjA3Nzc1ODM5NH0.NiLRalhnUWAqZFXKMSg5du_phjJ5roagR0U0n9HupHY";

export const supabase = createClient(supabaseUrl, supabaseKey);
