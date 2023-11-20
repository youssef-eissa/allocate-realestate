import './property.css'
import { StyledPageHead } from '../StyledComponents/PageHead.style'
import headBG from '../assets/propertiesImg.webp'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'
import { DateTime } from 'luxon'
import { apiData } from './types/apiTypes'
import CheckBoxOutlineBlankOutlinedIcon from '@mui/icons-material/CheckBoxOutlineBlankOutlined';
import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined';

import LocationOnIcon from '@mui/icons-material/LocationOn';
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
function Property() {
    const property = useSelector((state: { property: { property: apiData } }) => state.property.property)
    const date = DateTime.fromMillis(property?.createdAt)
    const createdData = date.toFormat('dd-MM-yyyy');

return (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2,type: "spring" }}
        className='container-fluid property '>
        <div className='row'>
            <StyledPageHead className='col-12 p-0 d-flex flex-column justify-content-center align-items-center' background={headBG}>
                <div className="overlay"></div>
                <div className='col-12 title text-center'>OUR EXCLUSIVE PROPERTIES</div>
                <h2 className='col-12 text-center'>{property.title }</h2>
            </StyledPageHead>
        </div>
        <div className='row d-flex justify-content-center'>
            <div className='col-10 my-5 d-flex flex-column propertyInfo'>
                <h2 className='col-12'>{property.title}</h2>
                <div className='col-12 my-3 price'>{property?.price.toLocaleString('en-US', { style: 'currency', currency: 'AED', maximumFractionDigits: 0 })} {property.purpose === 'for-rent' && '/Month'}</div>
                <div className='col-12 d-flex category mb-3'>
                    Category : {property?.category.map((category: any,i:number) => {
                        return <div key={category.id} className='col-auto mx-1'>{category.name} {i < property?.category.length - 1 && '|'} </div>
                    })}
                </div>
                <div className='col-12 mb-3 created'> Created at {createdData}</div>
                <div className='col-12 imgCon'>
                    <img alt="img" src={property.coverPhoto.url} className='img-fluid w-100 h-100'/>
                </div>
                <div className='col-12 d-flex flex-md-row flex-column my-md-0 my-4 mt-md-4  flex-wrap'>
                    <div className='col-md-3  col-12 d-flex align-items-center flex-column'>
                        <BedOutlinedIcon  sx={{ fontSize: '50px', color: '#80808040' }} />
                        <div className='col-12 my-2 propInfo text-center'>Rooms</div>
                        <div style={{fontSize:'20px'}} className='col-12 text-center'>{property.rooms}</div>
                    </div>
                    <div className='col-md-3 my-4 my-md-0 col-12 d-flex align-items-center flex-column'>
                        <BathtubOutlinedIcon  sx={{ fontSize: '50px', color: '#80808040' }} />
                        <div className='col-12 my-2 propInfo text-center'>Baths</div>
                        <div style={{fontSize:'20px'}} className='col-12 text-center'>{property.baths}</div>
                    </div>
                    <div className='col-md-3 my-4 my-md-0 col-12 d-flex align-items-center flex-column'>
                        <CheckBoxOutlineBlankOutlinedIcon  sx={{ fontSize: '50px', color: '#80808040' }} />
                        <div className='col-12 my-2 propInfo text-center'>sqft</div>
                        <div style={{fontSize:'20px'}} className='col-12 text-center'>{property.area.toFixed(0)} m</div>
                    </div>
                    <div className='col-md-3 my-4 my-md-0 col-12 d-flex align-items-center flex-column'>
                        <LocationOnIcon  sx={{ fontSize: '50px', color: '#80808040' }} />
                        <div className='col-12 my-2 propInfo text-center'>Location</div>
                        <div className='col-12 d-flex justify-content-center location'>
                    {property?.location.slice(0,3).reverse().map((location: any) => {
                        return <div style={{fontSize:'20px',fontFamily:'Oswald',fontWeight:'200'}} className='col-auto me-3'>{location.name} </div>
                    })}
                </div>
                    </div>
                </div>
                {property?.amenities.length>0&&<div style={{fontSize:'20px',fontFamily:'Oswald',fontWeight:'200'}}  className='col-12 d-flex flex-column mt-3'>
                    <div className='col-12 text-center fs-2'>Ameneties</div>
                    <div className='col-12 mt-3 d-flex justify-content-center flex-wrap'>
                    {property?.amenities.map((amenity: string,i:number) => {
                        return <div className='col-auto mx-2'>{amenity}{i < property?.amenities.length - 1 && ' | '} </div>
                    })}
                </div>
                </div>}
            </div>
        </div>
    </motion.div>
)
}

export default Property
