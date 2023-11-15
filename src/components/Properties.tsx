import { StyledPageHead } from '../StyledComponents/PageHead.style'
import headBG from '../assets/propertiesImg.webp'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'
import { apiData } from './types/apiTypes'
import CheckBoxOutlineBlankOutlinedIcon from '@mui/icons-material/CheckBoxOutlineBlankOutlined';
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined';
import { Link } from 'react-router-dom'
import { setProperty } from "./redux/property";
import { useDispatch } from 'react-redux'

function Properties() {
    const dispatch = useDispatch()
    const purpose = useSelector((state: { properties: { purpose: string } }) => state.properties.purpose)
    const PropertiesArray = useSelector((state: { properties: { array: apiData[] } }) => state.properties.array)

     function handlePropertyClick(item: apiData) {
        dispatch(setProperty(item))
        window.scrollTo(0, 0)
    }

return (
    <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{ opacity: 0 }}
        transition={{ duration: 2,type: "spring" }}
        className='container-fluid'>
        <div className='row'>
            <StyledPageHead className='col-12 p-0 d-flex flex-column justify-content-center align-items-center' background={headBG}>
                <div className="overlay"></div>
                <div className='col-12 title text-center'>OUR EXCLUSIVE PROPERTIES</div>
                <h2 className='col-12 text-center'>{purpose }</h2>
            </StyledPageHead>
        </div>
        <div className='row'>
            <div  className="col-12 d-flex gap-5 my-5 justify-content-center flex-wrap">
                        { PropertiesArray.map((item : apiData ) => {
                            return <Link onClick={() => handlePropertyClick(item)} style={{ textDecoration: 'none' ,color:'black'}} key={item.id} to={`/properties/${item.title}`} className="col-3 d-flex flex-column align-items-center ">
                                <div className="ImgCon rounded overflow-hidden
                                position-relative">
                                    {purpose==='Properties'&&<div style={{backgroundColor:'crimson',color:'white'}} className='col-4 p-2 text-center position-absolute bottom-0 start-0'>{ item.purpose.toUpperCase()}</div>}
                                    <img className="img-fluid h-100 w-100" alt="img" src={item.coverPhoto.url } />
                                </div>
                                <div className="col-12 my-4 itemTitle pb-3">
                                    <h6 className="col-12 title my-2">{item.title}</h6>
                                    <div className="col-12 location my-1 d-flex">
                                        {item.location.slice(0, 3).reverse().map((location: any) => {
                                        return <div key={ location.id} className="col-auto me-1 "> {location.name} </div>
                                    })}
                                    </div>
                                    <span className="col-12 price">{item.price.toLocaleString('en-US', { style: 'currency', currency: 'AED', maximumFractionDigits: 0})}</span>
                                </div>
                                <div className="col-12 ItemInfo  d-flex justify-content-between ">
                                    <div className="col-3 d-flex flex-column align-items-center ">
                                        <BedOutlinedIcon sx={{ color: '#80808040' }} />
                                        <span className="col-12 text-center my-2 sectionInfo">Rooms</span>
                                        <span>{item.rooms} </span>
                                    </div>
                                    <div className="col-3 d-flex flex-column align-items-center">
                                        <BathtubOutlinedIcon sx={{ color: '#80808040' }} />
                                        <span className="col-12 my-2 text-center sectionInfo">Baths</span>
                                        <span>{item.baths} </span>
                                    </div>
                                    <div className="col-3 d-flex flex-column align-items-center">
                                        <CheckBoxOutlineBlankOutlinedIcon sx={{ color: '#80808040' }} />
                                        <span className="col-12 my-2 text-center sectionInfo">Sqft</span>
                                        <span>{item.area.toFixed(0)} m</span>
                                    </div>
                                </div>
                            </Link>
                        })}
                    </div>
        </div>
    </motion.div>
)
}

export default Properties