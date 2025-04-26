import Alpine from 'alpinejs'
import formData from 'alpinejs-form-data'


const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

window.itemID = urlParams.get('id')

Alpine.plugin(formData)
Alpine.start()