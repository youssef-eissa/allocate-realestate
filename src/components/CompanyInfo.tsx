import './CompanyInfo.css'
import { Link } from "react-router-dom";
import { WrapperSection } from "../StyledComponents/Section.style"
import CallIcon from '@mui/icons-material/Call';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
function CompanyInfo() {
  return (
    <div className="container-fluid CompanyInfo p-0">
      <div className="row">
        <WrapperSection style={{ backgroundColor: "#E4ECF2" }} className="col-12 d-flex flex-column align-items-center">
          <div className="col-12 text-center SectionTitle mb-">
            <div className="title col-12">YOUR DREAM HOUSE IS ONE STEP AWAY!</div>
          </div>
          <div className="col-12 d-flex mt-5">
            <div className="col-4  d-flex flex-column align-items-center">
              <CallIcon  sx={{ fontSize: "80px", color: "crimson" }} />
              <p className="col-12 text-center my-3">Call Us</p>
              <Link style={{ textDecoration: "none", color: "black", }} to='tel:123-456-7890'>123-456-7890</Link>
            </div>
            <div className="col-4  d-flex flex-column align-items-center">
              <LocationOnOutlinedIcon  sx={{ fontSize: "80px", color: "crimson" }} />
              <p className="col-12 text-center my-3">Find Us</p>
              <Link target='_blank' style={{ textDecoration: "none", color: "black", }} to='https://maps.app.goo.gl/BZmY79tjFSYCbUL3A' className='col-12 text-center'>Polaris Mall, North Street 90, New Cairo 1, Egypt</Link>
            </div>
            <div className="col-4  d-flex flex-column align-items-center">
              <EmailOutlinedIcon  sx={{ fontSize: "80px", color: "crimson" }} />
              <p className="col-12 text-center my-3">Email Us</p>
              <Link style={{ textDecoration: "none", color: "black", }} to='mailto:mail@example.com' className='col-12 text-center'>mail@example.com</Link>
            </div>
          </div>
        </WrapperSection>
      </div>
    </div>
  )
}

export default CompanyInfo