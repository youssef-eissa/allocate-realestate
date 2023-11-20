import { useMutation } from "@tanstack/react-query"
import * as yup from 'yup'
import { useFormik } from "formik"
import { CreateUser } from "./fetches/usersAPi"
import { CreateAdmin } from "./fetches/adminsAPI"
import { Button } from "../StyledComponents/Button.style"
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import React from "react"
import { useState } from "react"
import { StyledPageHead } from '../StyledComponents/PageHead.style'
import headBG from '../assets/contactImg.webp'
import './signup.css'
import { FallingLines } from "react-loader-spinner";
import { motion } from 'framer-motion'




type User = {
    name:string,
    username:string,
    email:string,
    password:string,
    type:string
}

function Signup() {
    const [NotificationOpen, setNotificationOpen] = useState<boolean>(false);
    const [UserType, setUserType] = useState<string>('user');
    const [SecretKey, setSecretKey] = useState<string>('');
    const [SecretKeyError, setSecretKeyError] = useState<string>('');

    const schema  = yup.object().shape({
        name: yup.string().required('Name is required'),
        username: yup.string().required('Username is required'),
        email: yup.string().email().required(),
        password: yup.string().required(),
        
    })
    const {values,errors,handleBlur,handleChange,handleSubmit, touched,handleReset}=useFormik({
        initialValues:{
            name:'',
            username:'',
            email:'',
            password: '',
            
        },
        validationSchema:schema,
        onSubmit:(values)=>{
            if (UserType === 'admin' && SecretKey==='admin') {
                SendAdminData({
                name:values.name,
                username:values.username,
                email:values.email,
                password:values.password,
                type:UserType
                })
                handleReset(values)
                setSecretKey('')
                setSecretKeyError('')
            } else if (UserType === 'admin' && SecretKey !== 'admin') {
                setSecretKeyError('Invalid Secret Key')
            }
            else if (UserType === 'user') {
                SendUserData({
                name:values.name,
                username:values.username,
                email:values.email,
                password:values.password,
                type: UserType,
                
                })
            handleReset(values)
                
            }
            
        }
    })
    const { mutate:SendUserData,isPending:UserPending } = useMutation({
    mutationFn: (data: User) => {
    return CreateUser(data.name, data.username, data.email, data.password, data.type);
    },
    onSuccess: (data) => {
        console.log(data);
        handleClick()
    },
    });
    const { mutate:SendAdminData,isPending:AdminPending } = useMutation({
    mutationFn: (data: User) => {
    return CreateAdmin(data.name, data.username, data.email, data.password, data.type);
    },
    onSuccess: (data) => {
        console.log(data);
        handleClick()
    },
    });
    function handleSubmitForm(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        handleSubmit()
    }
    const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
        const handleClick = () => {
    setNotificationOpen(true);
        };
    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
        return;
    }
    setNotificationOpen(false);
    };
    

    return (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2,type: "spring" }}
            className="container-fluid signup">
            
            <div className="row">
                <StyledPageHead className='col-12 p-0 d-flex flex-column justify-content-center align-items-center' background={headBG}>
                <div className="overlay"></div>
                <div className='col-12 title text-center'>Join allocate family</div>
                <h2 className='col-12 text-center'>Sign Up</h2>
            </StyledPageHead>
            </div>
            <div className="row my-4 justify-content-center d-flex">
                <form onSubmit={handleSubmitForm} className="col-10">
                    <div className="col-12 d-flex ">
                        <div className="col-3 mb-3 typeClass">Type</div>
                        <div className="col-8 d-flex align-items-center  mb-3">
                        <label className="col-auto" htmlFor="user">user</label>
                        <input
                        type="radio"
                        name="UserType"
                        id="user"
                        value='user'
                    onChange={(e) => { setUserType(e.target.value); console.log(UserType)
                                }}
                        onBlur={handleBlur}
                        className="col-2 "
                        checked={UserType === 'user'}
                        />
                        <label htmlFor="admin">admin</label>
                        <input
                        type="radio"
                        name="UserType"
                        id="admin"
                        value='admin'
                        onChange={(e) => { setUserType(e.target.value); console.log(UserType)
                        }}
                        onBlur={handleBlur}
                        className="col-2 "
                        checked={UserType === 'admin'}
                        />
                    </div>
                    </div>
                    {UserType === 'admin' &&
                        <div className="col-12 d-flex flex-column">
                            <label>Secret Key</label>
                            <input
                            type="text"
                            name="secretKey"
                            id="secretKey"
                            value={SecretKey}
                            onChange={e=>{setSecretKey(e.target.value)}}
                            className="col-12 mb-3"
                            />
                            <div className="col-12 text-danger">{ SecretKeyError}</div>
                        </div>
                    }
                    <div className="col-12 d-flex flex-column">
                        <label htmlFor="name">Name</label>
                        <input
                        type="text"
                        name="name"
                        id="name"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                            className="col-12 mb-3"
                        />
                        {touched.name && errors.name && <p className="text-danger">{errors.name}</p>}
                    </div>
                    <div className="col-12 d-flex flex-column mb-3">
                        <label htmlFor="username">Username</label>
                        <input
                        type="text"
                        name="username"
                        id="username"
                        value={values.username}
                        onChange={handleChange}
                            onBlur={handleBlur}
                            className="col-12 mb-3"
                        />
                        {touched.username && errors.username && <p className="text-danger">{errors.username}</p>}
                    </div>
                    <div className="col-12 d-flex flex-column mb-3">
                        <label htmlFor="emailSignup">Email</label>
                        <input
                        type="email"
                        name="email"
                        id="emailSignup"
                        value={values.email}
                        onChange={handleChange}
                            onBlur={handleBlur}
                            className="col-12 mb-3"
                        />
                        {touched.email && errors.email && <p className="text-danger">{errors.email}</p>}
                    </div>
                    <div className="col-12 d-flex flex-column mb-3">
                        <label htmlFor="password">Passowrd</label>
                        <input
                        type="password"
                        name="password"
                        id="password"
                        value={values.password}
                        onChange={handleChange}
                            onBlur={handleBlur}
                            className="col-12 mb-3"
                        />
                        {touched.password && errors.password && <p className="text-danger">{errors.password}</p>}
                    </div>
                       
                    <Button type="submit" className="col-6 d-flex mx-auto justify-content-center rounded p-2">Create Account {UserPending||AdminPending ?<div className="col-2 ms-2"> <FallingLines color={'white'} width="35" /> </div>: null}</Button>
                </form>

            </div>
        <Snackbar  open={NotificationOpen}  autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Account created successfully
                </Alert>
                </Snackbar>
    </motion.div>
)
}

export default Signup