import { StyledLink } from '../StyledComponents/Link.style'
import HeadHomeImage from '../assets/Villa-for-Sale-in-Damac Lagoons-pic-1-31501.png'
import { TypeAnimation } from 'react-type-animation';
import {  useDispatch } from 'react-redux'
import { apiData } from './types/apiTypes'
import { setPurpose, resetProperties, setProperties } from './redux/properties'
import './home.css'
import SearchBar from './SearchBar';


type THomeImg={
    ForSale:apiData[]
    ForRent:apiData[]
}


function HomeImg({ForSale,ForRent}:THomeImg) {
    const dispatch = useDispatch()
    

    function Texttype(){
        return (
        <TypeAnimation
        sequence={[
            'New Properties',1000,
            'New Villas',1000,
            'New TwinHouses',1000
                ]}
        wrapper="div"
        cursor={false}
        repeat={Infinity}
        style={{ color: 'white', fontFamily: 'Oswald, sans-serif',  }}
        speed={30}
        className='typeAnimation'
                
        />
        )
    }
    function handlePurpose() {
    const allProperties = ForSale.concat(ForRent)
        
        dispatch(setPurpose('Properties'))
        window.scrollTo(0, 0)
        dispatch(resetProperties())
        dispatch(setProperties(allProperties))
    }

return (
    <div  className="container-fluid p-0">
        <div  className="row HomeImg">
            <div className="col-12 p-0 homeLandingImg position-relative d-flex justify-content-center align-items-center">
                <img src={HeadHomeImage} alt='img' className='img-fluid w-100 h-100 position-absolute z-1' />
                <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }} className='HomeOverlay col-12 position-absolute w-100 h-100 z-2'></div>
                <div className='col-md-6 col-12 d-flex flex-column homeLadingText z-3 align-items-center'>
                    <div className='col-12 text-center'>
            <Texttype/>
                    </div>
                    <span className='text-center col-12'>EXCLUSIVELY BY Allocate</span>
                    <StyledLink onClick={() => handlePurpose()} className='col-md-3 col-6  rounded p-2 text-center mt-5' to='/properties'>Explore</StyledLink>
                    <div className='col-md-12 col-9 mt-3'>
                        <SearchBar sales={ForSale} rents={ForRent}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}

export default HomeImg