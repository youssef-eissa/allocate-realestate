import axios from "axios";
type User = {
    name:string
    username:string
    email:string
    password:string
    type: string
    sell: any
}

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
export const putUser =  (id:number,values:any,user:User,img:any):Promise<any>  => {
    return axios.put(`https://allocatedb.vercel.app/users/${id}`,{...user,name:user.name,username:user.username,email:user.email,password:user.password,sell:values,propertyImg:img} )
}
