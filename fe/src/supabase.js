import {supabaseClient} from "../../be/src/supabase-client"


async function fetchTestTable() {
    try {
        const { data, error } = await supabaseClient
            .from('test_table')
            .select(
                `
                id,
                created_at
                `,
        );
        console.log(data)
      if (error) {
        throw error;
      }
    } catch (error) {
      console.error('Error fetching test table:', error);
    }
  }

