import axios from "axios";


export const CreateAdmin =  (name:string,username:string,email:string,password:string,type:string):Promise<any>  => {
    return axios.post('https://allocatedb.vercel.app/admins', {
        name,
        username,
        email,
        password,
        type
    })
}
