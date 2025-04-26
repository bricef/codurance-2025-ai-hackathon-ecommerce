
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

async function fetchAllImages() {
    try {
        const { data, error } = await supabase
            .storage
            .getBucket('images')
        console.log(data)
      if (error) {
        throw error;
      }
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  }

  async function fetchImageUrl(id) {
    try {
        const { data, error } = await supabase
            .storage
            .from('images')
            .getPublicUrl(`${id}.jpg`)
        console.log(data)
      if (error) {
        throw error;
      }
      return data
    } catch (error) {
      console.error(`Error fetching url for image ${id}.jpg:`, error);
    }
  }


Alpine.start()

