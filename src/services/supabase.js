import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://lwawgrucdodxhvlhjdea.supabase.co";

const supabase = createClient(
  //   import.meta.env.SUPABASE_URL,
  //   import.meta.env.SUPABASE_ANON_KEY
  supabaseUrl,
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx3YXdncnVjZG9keGh2bGhqZGVhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY3Mzg2MTYsImV4cCI6MjAzMjMxNDYxNn0.qwbwuDDrjG842AVsikEJLH5AlN8Q-QnnMUFDxz9JZCE"
);

export default supabase;
