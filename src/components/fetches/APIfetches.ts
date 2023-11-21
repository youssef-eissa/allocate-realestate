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
     'X-RapidAPI-Key': '1ae9f2515dmshb73a3ac83e01facp151aefjsnc2bd78905b21',
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
    'X-RapidAPI-Key': '1ae9f2515dmshb73a3ac83e01facp151aefjsnc2bd78905b21',
    'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
    }
    })
}