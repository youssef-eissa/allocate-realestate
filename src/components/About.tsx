import { StyledPageHead } from '../StyledComponents/PageHead.style'
import headBG from '../assets/about.webp'
import {motion} from 'framer-motion'


function About() {
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
                <div className='col-12 title text-center'>Who Are We</div>
                <h2 className='col-12 text-center'>About Us</h2>
            </StyledPageHead>

        </div>
    </motion.div>
)
}

export default About