import { WrapperSection } from "../StyledComponents/Section.style"
import { apiData } from "./types/apiTypes"
import './Newproperties.css'
import { Link } from "react-router-dom"
import CheckBoxOutlineBlankOutlinedIcon from '@mui/icons-material/CheckBoxOutlineBlankOutlined';
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined';
import { StyledLink } from "../StyledComponents/Link.style";
import { setProperty } from "./redux/property";
import { useDispatch } from "react-redux";

import { setPurpose, resetProperties, setProperties } from './redux/properties'



type TNewProperties = {
    ForSale: apiData[]
    isFetching: boolean
    isSuccess:boolean
}
function SaleNewProperties({ ForSale, isFetching, isSuccess }: TNewProperties) {
    const dispatch = useDispatch()
    
    function handlePropertyClick(item: apiData) {
        dispatch(setProperty(item))
        window.scrollTo(0, 0)
    }
    function handlePurpose(){
        dispatch(setPurpose('Buy'))
        window.scrollTo(0, 0)
        dispatch(resetProperties())
        dispatch(setProperties(ForSale))
    }
    return (
        <div  className='container-fluid p-0 NewProperties'>
            <div  className="row">
                <WrapperSection  className="col-12 d-flex flex-column justify-content-center">
                    <div className="col-12 text-center SectionTitle mb-5">
                        <div className="title col-12">NEW PROPERTIES</div>
                        <div className="col-12 purposeText text-center">For Sale</div>
                    </div>
                    <div  className="col-12 d-flex flex-md-row flex-column gap-5 justify-content-center flex-wrap">
                        {isSuccess && ForSale.slice(0, 6).map((item : apiData ) => {
                            return <Link onClick={() => handlePropertyClick(item)} style={{ textDecoration: 'none' ,color:'black'}} key={item.id} to={`/properties/${item.title}`} className="col-md-3 col-12 d-flex flex-column align-items-center ">
                                <div  className="ImgCon rounded overflow-hidden">
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

                <StyledLink onClick={()=>handlePurpose()} className="col-md-1 col-5 p-2 d-flex justify-content-center align-items-center rounded align-self-center mt-5"  to='/properties'>Show more</StyledLink>
                </WrapperSection>
            </div>
    </div>
    )
}

export default SaleNewProperties