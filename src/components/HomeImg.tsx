import { StyledLink } from '../StyledComponents/Link.style'
import HeadHomeImage from '../assets/Villa-for-Sale-in-Damac Lagoons-pic-1-31501.png'
function HomeImg() {
return (
    <div className="container-fluid p-0">
        <div className="row HomeImg">
            <div className="col-12 p-0 homeLandingImg position-relative d-flex justify-content-center align-items-center">
                <img src={HeadHomeImage} alt='img' className='img-fluid w-100 h-100 position-absolute z-1' />
                <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }} className='HomeOverlay col-12 position-absolute w-100 h-100 z-2'></div>
                <div className='col-6 d-flex flex-column homeLadingText z-3 align-items-center'>
                    <h1 className='col-12 text-center'>New Properties</h1>
                    <span className='text-center col-12'>EXCLUSIVELY BY Allocate</span>
                    <StyledLink className='col-2 rounded p-2 text-center mt-5' to='/properties'>Explore</StyledLink>
                </div>
            </div>
        </div>
    </div>
)
}

export default HomeImg