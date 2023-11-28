import axios from "axios";

export const ForSaleFetch =  () => {
    return axios.get('https://bayut.p.rapidapi.com/properties/list', {
        params: {
        locationExternalIDs: '5002,6020',
        purpose: 'for-sale',
        hitsPerPage: '25',
        page: '0',
        lang: 'en',
        sort: 'city-level-score',
        rentFrequency: 'monthly',
        categoryExternalID: '4'
        },
        headers: {
    'X-RapidAPI-Key': 'bd5bd0e351mshe0b55c617d771c6p12249djsn8276a5c7dce4',
    'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
    }
    })
}


export const ForRentFetch =  () => {
    return axios.get('https://bayut.p.rapidapi.com/properties/list', {
    params: {
    locationExternalIDs: '5002,6020',
    purpose: 'for-rent',
    hitsPerPage: '25',
    lang: 'en',
    sort: 'city-level-score',
    rentFrequency: 'monthly',
    categoryExternalID: '4'
        },
    headers: {
    'X-RapidAPI-Key': 'bd5bd0e351mshe0b55c617d771c6p12249djsn8276a5c7dce4',
    'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
    }
    })
}