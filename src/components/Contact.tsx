import { StyledPageHead } from '../StyledComponents/PageHead.style'
import headBG from '../assets/contactImg.webp'
import { motion } from 'framer-motion'
import './contact.css'
import { Link } from 'react-router-dom'
function Contact() {
    return (
        <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{ opacity: 0 }}
        transition={{ duration: 2,type: "spring" }}
            className="container-fluid contact ">
            <div className="row">
                <StyledPageHead className='col-12 p-0 d-flex flex-column justify-content-center align-items-center' background={headBG}>
                <div className="overlay"></div>
                <div className='col-12 title text-center'>Get in touch</div>
                <h2 className='col-12 text-center'>Contact Us</h2>
            </StyledPageHead>
            </div>
            <div className='row my-3'>
                <div className='col-12 d-flex flex-md-row flex-column my-5 p-0'>
                    <h1 className='col-md-4 col-12 d-flex justify-content-center align-items-center'>Our Office</h1>
                    <div style={{ fontFamily: 'Oswald, sans-serif', fontWeight: '300', fontSize: '20px' }} className='col-md-4 col-12 my-4 my-md-0 d-flex justify-content-center align-items-center'>Polaris Mall, North Street 90, New Cairo 1, Egypt</div>
                    <div className='col-md-4 col-12 d-flex align-items-center flex-column'>
                        <Link className='col-6 d-flex justify-content-center align-items-center mb-3' style={{ textDecoration: 'none', color: 'black',fontFamily: 'Oswald, sans-serif',fontSize: '20px' }} to='mailto:mail@example.com'>mail@example.com</Link>
                        <Link className='col-6 d-flex justify-content-center align-items-center' style={{ textDecoration: 'none', color: 'black' ,fontFamily: 'Oswald, sans-serif',fontSize: '20px'}} to='tel:123456789'>+20 123 456 789</Link>
                    </div>
                </div>
                <div className='col-12 p-0'>
                    <iframe  className='col-12' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.307113329934!2d31.4936091!3d30.028045900000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145823273f627f51%3A0xc158a62e5b21e3a4!2sAllocate%20real%20estate!5e0!3m2!1sen!2seg!4v1699984246529!5m2!1sen!2seg" width="800" height="600" title='map' allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
    </motion.div>
)
}

export default Contact