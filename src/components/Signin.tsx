import './signin.css'
import { StyledPageHead } from '../StyledComponents/PageHead.style'
import { motion } from 'framer-motion'
import headBG from '../assets/contactImg.webp'
import { useState,useEffect } from 'react'
import { Button } from '../StyledComponents/Button.style'
import { useMutation } from '@tanstack/react-query'
import { getUser } from './fetches/usersAPi'
import { getAdmin } from './fetches/adminsAPI'
import { FallingLines } from "react-loader-spinner";
import { useNavigate,useLocation } from 'react-router-dom'
import { StyledLink } from '../StyledComponents/Link.style'
import {  useDispatch } from 'react-redux'
import { setUser, setLogin, } from './redux/user'



type Data = {
    username:string,
}
function Signin() {
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const [username,setUsername]=useState<string>('')
    const [password,setPassword]=useState<string>('')
    const [type, setType] = useState<string>('')
    
    
    const { mutate:GetUserData,isPending:UserPending,error:userError,data:userData } = useMutation({
    mutationFn: (data: Data) => {
    return getUser(data.username);
        },
        
    onSuccess: (data) => {
        console.log(data);
        },
    
    
    });
    const { mutate:GetAdminData,isPending:AdminPending,error:adminError,data:adminData } = useMutation({
    mutationFn: (data: Data) => {
    return getAdmin(data.username);
    },
    onSuccess: (data) => {
        console.log(data);
    },
    });

    useEffect(() => {
        if (userData?.data[0].password === password && location.hash==='') {
            navigate('/')
            dispatch(setUser(userData?.data[0]))
            dispatch(setLogin())
        } else if (adminData?.data[0].password === password) {
            navigate('/')
            dispatch(setUser(adminData?.data[0]))
            dispatch(setLogin())
        } else if (userData?.data[0].password === password && location.hash==='#sell') {
            navigate('/sell')
            dispatch(setUser(userData?.data[0]))
            dispatch(setLogin())
        }
    }, [userData?.data[0].password,password,adminData?.data[0].password])
    
    function handleSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault()
        if (type === 'user') {
            GetUserData({
            username
        })
    } else if(type === 'admin'){
        GetAdminData({
            username
        })
        }
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }
    const location=useLocation()

return (
    <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{ opacity: 0 }}
        transition={{ duration: 2,type: "spring" }}
        className='container-fluid signin'>
        <div className='row'>
            <StyledPageHead className='col-12 p-0 d-flex flex-column justify-content-center align-items-center' background={headBG}>
                <div className="overlay"></div>
                <div className='col-12 title text-center'>welcome to allocate</div>
                <h2 className='col-12 text-center'>Sign in</h2>
            </StyledPageHead>
        </div>
        <div className='row d-flex justify-content-center my-5'>
            <div className='col-10 d-flex flex-column align-items-center'>
                <form onSubmit={handleSubmit} className='col-12 d-flex flex-column align-items-center'>
                    <div className='col-md-6 col-12 mb-3'>
                        <label className='col-12 mb-3' htmlFor='username'>Username</label>
                        <input
                        id='username'
                        className='col-12 rounded p-2'
                        type='text'
                        name='username'
                        value={username}
                        onChange={e=>{setUsername(e.target.value)}}
                        />
                        {userError|| adminError ? <p className='text-danger mt-1'>Invalid Username</p>:null}
                    </div>
                        <div className='col-md-6 col-12'>
                        <label className='col-12 mb-3' htmlFor='password'>Password</label>
                        <input
                        id='password'
                        className='col-12 rounded p-2'
                        type='password'
                        name='password'
                        value={password}
                        onChange={e=>{setPassword(e.target.value)}}
                        />
                    </div>
                    <div className='col-6 d-flex flex-md-row flex-column align-items-center mt-3 '>
                    <div style={type==='user'?{backgroundColor:'#80808078',color:'crimson'}:{backgroundColor:'white',color:'#80808078'}} onClick={()=>{setType('user')}} className='col-4 type rounded d-flex p-2 justify-content-center'>
                        User
                    </div>
                    <div className='col-4 d-flex align-items-center justify-content-center'>
                        Or
                    </div>
                    <div style={type==='admin'?{backgroundColor:'#80808078',color:'crimson'}:{backgroundColor:'white',color:'#80808078'}} onClick={()=>{setType('admin')}} className='col-4 d-flex rounded type p-2 justify-content-center'>
                        Admin
                    </div>
                </div>
                    <Button type='submit' className='col-md-2 col-6 d-flex justify-content-center p-2 rounded mt-3'>Sign in {UserPending||AdminPending ?<div className="col-2 ms-3"> <FallingLines color={'white'} width="35" /> </div>: null}</Button>
                </form>

                <div className='col-6 d-flex flex-md-row flex-column align-items-center row-gap-2 my-4 justify-content-between'>
                    <div className='col-6 d-flex newuser justify-content-start align-items-center'>
                        New User?
                    </div>
                    <div className='col-6 d-flex justify-content-end align-items-center'>
                        <StyledLink className='col-md-6 col-12 p-2 rounded d-flex justify-content-center align-items-center' to='/signup'>Sign up</StyledLink>
                    </div>
                </div>
                
            </div>
        </div>
    </motion.div>
)
}

export default Signin