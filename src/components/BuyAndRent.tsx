import butImg from '../assets/buyImg.jpeg'
import rentImg from '../assets/rentImg.jpeg'
import { Link } from 'react-router-dom'
import { WrapperSection } from '../StyledComponents/Section.style'
function BuyAndRent() {
return (
    <div className='container-fluid p-0'>
        <div className='row BuyAndRent'>
                <WrapperSection className='col-12 d-flex flex-column justify-content-center '>
                <div className='col-12 text-center SectionTitle mb-5'>
                    <div className='title col-12'>WHAT ARE YOU LOOKING FOR?</div>
                </div>
                <div className='col-12 d-flex'>
                    <div className='ImgCon col-6 justify-content-center position-relative d-flex align-items-center'>
                        <img src={butImg} alt='img' className='img-fluid w-100 h-100 position-absolute z-1' />
                        <div style={{ backgroundColor: 'rgb(25 55 109 / 43%)' }} className='col-12 position-absolute w-100 h-100 z-2'></div>
                        <Link to='/buy' className='col-3 position-absolute text-center toPage z-3'>Buy</Link>
                    </div>
                        <div className='ImgCon col-6 position-relative d-flex align-items-center justify-content-center'>
                            <img src={rentImg} alt='img' className='img-fluid w-100 h-100 position-absolute z-1' />
                            <div style={{ backgroundColor: '#ff00004a' }} className='col-12 position-absolute w-100 h-100 z-2'></div>
                            <Link to='/rent' className='col-3 toPage position-absolute text-center z-3'>Rent</Link>
                    </div>
                </div>
            </WrapperSection>
        </div>
       
    </div>
)
}

export default BuyAndRent