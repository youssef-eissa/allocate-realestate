import { StyledPageHead } from '../StyledComponents/PageHead.style'
import headBG from '../assets/contactImg.webp'
import SelectVariants from './MUI/Select'
import {  useFormik } from 'formik';
import * as yup from 'yup';
import './sell.css'
import { Button } from '../StyledComponents/Button.style';
import { putUser } from './fetches/usersAPi';
import { useMutation } from '@tanstack/react-query';
import { useSelector } from 'react-redux'
import {  useEffect, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { FallingLines } from "react-loader-spinner";


type SendProperty = {
    id: number,
    values:any
    user: any
    img:any
}

const schema = yup.object().shape({
    description: yup
        .string()
        .required('description is required'),
    price: yup
        .number()
        .required('price is required').positive().integer().min(1, 'Please enter Price'),
    location: yup
        .string()
        .required('location is required'),
    rooms: yup
        .number()
        .required('rooms is required').positive().integer().min(1, 'Please enter Rooms number'),
    baths: yup
        .number()
        .required('baths is required').positive().integer().min(1, 'Please enter Baths number'),
    area: yup
        .number()
        .required('area is required').positive().integer().min(1, 'Please enter total area '),
    type: yup
        .string()
        .required('type is required'),
       
    
})

function Sell() {
    const [file, setFile] = useState<File | undefined>()
    const [Preview, setPreview] = useState < string | ArrayBuffer |null>(null)
    
    const user=useSelector((state:{user:{user:any}})=>state.user.user)
    const { values, errors, handleBlur, handleChange, handleSubmit, touched, handleReset } = useFormik({
        initialValues: {
            description: '',
            price: 0,
            location: '',
            rooms: 0,
            baths: 0,
            area: 0,
            type: '',
        },
        validationSchema: schema,
        onSubmit: (values) => {
            mutate({
                id: user.id,
                values: values,
                user: user,
                img:Preview
            })
            
        }

    })
    

    function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        handleSubmit()
        

    }
    const {mutate,isSuccess,isPending}=useMutation({
        mutationFn:(data:SendProperty)=>{
        return putUser(data.id,data.values,data.user,data.img)
        },
        onSuccess:(data)=>{
            console.log(data);
            
        }
    })
    
    function handleChangeFile(e:any){
        const image = new FileReader()
        image.readAsDataURL(e.target.files[0])
        setFile(e.target.files[0])
        image.onload = (e: any) => {
            setPreview(image.result)
        }
    }

    useEffect(() => {
        if (isSuccess) {
            handleReset(values)
            setPreview(null)
        }
    }, [isSuccess,values,handleReset])

    return (
        <div className='container-fluid sell'>
            <div className='row'>
                <StyledPageHead className='col-12  d-flex flex-column justify-content-center align-items-center' background={headBG}>
                <div className="overlay"></div>
                <div className='col-12 title text-center'>please fill in the form</div>
                <h2 className='col-12 text-center'>Sell</h2>
                </StyledPageHead>
            </div>
            <div className='row d-flex justify-content-center'>
                <form onSubmit={ handleFormSubmit} className='col-10 d-flex flex-column align-items-center my-5 row-gap-4'>
                    <div className='col-12 d-flex flex-column '>
                        <SelectVariants onchange={handleChange} type={values.type} />
                        {errors.type && touched.type ? <p className='text-danger'>{errors.type}</p> : null}
                    </div>
                    <div className="form-group d-flex flex-column row-gap-2  col-12">
                        <label htmlFor="description">Description</label>
                        <input
                            type="text"
                            className="form-control col-12"
                            id="description"
                            placeholder="Enter Description"
                            value={values.description}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            name='description'
                        />
                        {errors.description && touched.description ? <p className='text-danger'>{errors.description}</p> : null}
                        
                    </div>
                    <div className="form-group  d-flex flex-column row-gap-2  col-12">
                        <label htmlFor="location">Location</label>
                        <input
                            type="text"
                            className="form-control col-12"
                            id="location"
                            placeholder="Enter Location"
                            value={values.location}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            name='location'
                        />
                        {errors.location && touched.location ? <p className='text-danger'>{errors.location}</p> : null}
                    </div>
                    <div className="form-group  d-flex flex-column row-gap-2 col-12">
                        <label htmlFor="Rooms">Rooms</label>
                        <input
                            type="number"
                            className="form-control col-12"
                            id="Rooms"
                            placeholder="Enter Rooms"
                            value={values.rooms}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            name='rooms'
                        />
                        {errors.rooms && touched.rooms ? <p className='text-danger'>{errors.rooms}</p> : null}
                    </div>
                        <div className="form-group  d-flex flex-column row-gap-2 col-12">
                        <label htmlFor="Baths">Baths</label>
                        <input
                            type="number"
                            className="form-control col-12"
                            id="Baths"
                            placeholder="Enter Baths"
                            value={values.baths}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            name='baths'
                        />
                        {errors.baths && touched.baths ? <p className='text-danger'>{errors.baths}</p> : null}
                    </div>
                    <div className="form-group  d-flex flex-column row-gap-2 col-12">
                        <label htmlFor="Area">Area</label>
                        <input
                            type="number"
                            className="form-control col-12"
                            id="Area"
                            placeholder="Enter Area"
                            value={values.area}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            name='area'
                        />
                        {errors.area && touched.area ? <p className='text-danger'>{errors.area}</p> : null}
                    </div>
                    <div className="form-group  d-flex flex-column row-gap-2 col-12">
                        <label htmlFor="Baths">Price</label>
                        <input
                            type="number"
                            className="form-control col-12"
                            id="Price"
                            placeholder="Enter Price in EGP"
                            value={values.price}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            name='price'
                        />
                        {errors.price && touched.price ? <p className='text-danger'>{errors.price}</p> : null}
                    </div>
                    <div className="form-group  d-flex flex-column row-gap-2 col-12">
                        <label htmlFor="Image">Image</label>
                        <input
                            type="file"
                            className="form-control col-12"
                            id="Image"
                            onChange={handleChangeFile}
                            onBlur={handleBlur}
                            accept='image/*'
                            name='img'


                        />
                       
                    </div>
                    {Preview && <div className='col-6 previewImg'>
                        <div className='delete'>
                            <Tooltip onClick={() => { setPreview(null)}} sx={{color:'red'}} title="Delete">
                        <IconButton>
                            <DeleteIcon />
                        </IconButton>
                        </Tooltip>
                        </div>
                    <img src={Preview as string } alt="preview" className='img-fluid h-100 w-100' />
                    </div>}
                    <Button type="submit" className='col-2 d-flex mx-auto justify-content-center rounded p-2 '>Submit {isPending ?<div className="col-2 ms-2"> <FallingLines color={'white'} width="35" /> </div>: null}</Button>
                </form>
            </div>
    </div>
)
}

export default Sell