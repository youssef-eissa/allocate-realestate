import './Footer.css'
import logo from '../assets/theLogo.jpeg'
import { Link } from 'react-router-dom'
import CallIcon from '@mui/icons-material/Call';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
function Footer() {
return (
    <div className="container-fluid  footer ">
        <div className="row ">
            <div className="col-12 p-5 d-flex justify-content-between ">
                <div  className='col-4 d-flex flex-column align-items-center '>
                    <Link style={{ textDecoration: "none", color: "white" }} className='col-10' to='/'>
                        <div className='col-12 logoContainer'>
                        <img src={logo} alt='logo' className='img-fluid h-100'/>
                    </div>
                    <div className='col-12 d-flex flex-column justify-content-end CompanyName'>
                        <span className='col-12'>Allocate</span>
                        <span className='col-12'>Real Estate Consultancy</span>
                    </div>
                    </Link>
                    <div className='col-10 d-flex mt-2'>
                        <Link target='_blank' to='https://www.facebook.com/allocate.eg'> <FacebookOutlinedIcon className='rounded' sx={{ fontSize: "30px", color: "white" ,'&:hover':{color:'#4267B2',backgroundColor:'white'}}} /></Link>
                        <Link target='_blank' to='https://www.instagram.com/allocate_eg/'> <InstagramIcon className='ms-3 rounded' sx={{ fontSize: "30px", color: "white", '&:hover': { color: '#d62976',backgroundColor:'white' } }} /></Link>
                        <Link target='_blank' to=''> <WhatsAppIcon className='ms-3 rounded' sx={{ fontSize: "30px", color: "white",'&:hover':{color:'#25D366',backgroundColor:'white'} }} /></Link>
                    </div>
                </div>
                <div className='col-4 d-flex flex-column align-items-center '>
                    <Link to='/' className='col-12 toPage mb-2'>Home</Link>
                    <Link to='/properties' className='col-12 mb-2 toPage'>Properties</Link>
                    <Link to='/about' className='col-12 toPage mb-2'>About</Link>
                    <Link to='/contact' className='col-12 toPage'>Contact</Link>
                </div>
                <div className='col-4 d-flex flex-column align-items-center'>
                    <div className='col-12 d-flex'>
                        <CallIcon  sx={{ fontSize: "30px", color: "white" }} />
                        <Link className='ms-3' style={{ textDecoration: "none", color: "white", }} to='tel:123-456-7890'>123-456-7890</Link>
                    </div>
                    <div className='col-12 d-flex mt-4'>
                        <LocationOnOutlinedIcon  sx={{ fontSize: "30px", color: "white" }} />
                        <Link target='_blank' style={{ textDecoration: "none", color: "white" }} to='https://maps.app.goo.gl/BZmY79tjFSYCbUL3A' className='ms-3'>Polaris Mall, North Street 90, New Cairo 1, Egypt</Link>
                    </div>
                    <div className='col-12 d-flex mt-4'>
                        <EmailOutlinedIcon  sx={{ fontSize: "30px", color: "white" }} />
                        <Link style={{ textDecoration: "none", color: "white" }} to='mailto:mail@example.com' className='ms-3'>mail@example.com</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}

export default Footer