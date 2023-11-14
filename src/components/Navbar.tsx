import './navbar.css'
import logo from '../assets/theLogo.jpeg'
import { Link } from 'react-router-dom'
function Navbar() {
return (
    <div className='container-fluid navBar py-2'>
        <div className='row d-flex justify-content-center'>
            <div className='col-10 d-flex justify-content-between p-0'>
                <Link to='/' className='col-3 LogoBox d-flex'>
                    <img src={logo} alt="logo" className='img-fluid ' />
                    <div className='col-7 d-flex flex-column justify-content-end CompanyName'>
                        <span className='col-12'>Allocate</span>
                        <span className='col-12'>Real Estate Consultancy</span>
                    </div>
                </Link>
                <div className='col-6 d-flex justify-content-around align-items-center'>
                    <Link to='/' className='col-3 toPage'>Home</Link>
                    <Link to='/properties' className='col-3 toPage'>Properties</Link>
                    <Link to='/about' className='col-3 toPage'>About</Link>
                    <Link to='/contact' className='col-3 toPage'>Contact</Link>
                </div>
            </div>
        </div>
    </div>
)
}

export default Navbar