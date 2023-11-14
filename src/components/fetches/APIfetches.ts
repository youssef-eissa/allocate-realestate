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
    'X-RapidAPI-Key': '8586c2a384mshc7f700af09616d5p12c26bjsnc70a2d73397e',
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
    'X-RapidAPI-Key': '8586c2a384mshc7f700af09616d5p12c26bjsnc70a2d73397e',
    'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
    }
    })
}