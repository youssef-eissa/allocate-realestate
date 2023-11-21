import { StyledPageHead } from '../StyledComponents/PageHead.style'
import headBG from '../assets/contactImg.webp'
import './home.css'

function Notfound() {
    return (
        <div className='container-fluid '>
            <div className='row'>
                <StyledPageHead className='col-12  d-flex flex-column justify-content-center align-items-center' background={headBG}>
                <div className="overlay"></div>
                <div className='col-12 title text-center'>ooppsss</div>
                <h2 className='col-12 text-center'>Page Error</h2>
                </StyledPageHead>
                <div className='row '>
                    <div className="col-12 p-0 notfound d-flex justify-content-center align-items-center ">
                        Sorry, Page Not Found
                    </div>
                </div>
            </div>
    </div>
)
}

export default Notfound