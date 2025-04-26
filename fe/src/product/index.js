import Alpine from 'alpinejs'
import formData from 'alpinejs-form-data'
import {client} from "../supabase"

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const id = urlParams.get('id')

async function getItemDetails(id){
    console.log("id", id)
    const items = await client.from('styles_slim')
        .select(`id,gender,masterCategory,subCategory,articleType,baseColour,season,year,usage,productDisplayName`)
        .eq('id', `${id}`)
    console.log(items.data)
    console.log(items.data[0])
    return items.data[0];
}

window.id = id;
window.getItemDetails = getItemDetails;

Alpine.plugin(formData)
Alpine.start()