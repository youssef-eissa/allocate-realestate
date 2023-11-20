import axios from "axios";


export const CreateUser =  (name:string,username:string,email:string,password:string,type:string):Promise<any>  => {
    return axios.post('https://allocatedb.vercel.app/users', {
        name,
        username,
        email,
        password,
        type
    })
}

export const getUser =  (username:string,):Promise<any>  => {
    return axios.post(`https://allocatedb.vercel.app/users/${username}`, {
        username,
       
    })
}
