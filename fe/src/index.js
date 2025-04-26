
import Alpine from 'alpinejs'
import {client} from "./supabase"


async function fetchTestTable() {
    const { data, error } = await client
        .from('styles_slim')
        .select(`id,gender,masterCategory,subCategory,articleType,baseColour,season,year,usage,productDisplayName`);
      
    if (error) {
      console.error('Error fetching test table:', error);
      return [];
    }
    return data;
  }

const products = fetchTestTable()
window.products = products


Alpine.start()

