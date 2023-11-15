import { StyledPageHead } from '../StyledComponents/PageHead.style'
import headBG from '../assets/about.webp'
import { motion } from 'framer-motion'
import './about.css'
import CountUp from 'react-countup';
import Diversity3OutlinedIcon from '@mui/icons-material/Diversity3Outlined';
import EngineeringOutlinedIcon from '@mui/icons-material/EngineeringOutlined';
import EmojiTransportationOutlinedIcon from '@mui/icons-material/EmojiTransportationOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';



function About() {

return (
    <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{ opacity: 0 }}
        transition={{ duration: 2,type: "spring" }}
        className='container-fluid about'>
        <div className='row'>
            <StyledPageHead className='col-12 p-0 d-flex flex-column justify-content-center align-items-center' background={headBG}>
                <div className="overlay"></div>
                <div className='col-12 title text-center'>Who Are We</div>
                <h2 className='col-12 text-center'>About Us</h2>
            </StyledPageHead>

        </div>
        <div className='row d-flex justify-content-center abouttext my-5'>
            <div className='col-10 d-flex flex-column'>
                <motion.div
                    initial={{ x: '-100vw' }}
                    animate={{ x: 0 }}
                    transition={{duration: 1.5,bounce: 0.3,type:'spring'} } className='col-12 d-flex d-flex flex-md-row flex-column justify-content-between textbox pb-3'>
                    <div className='col-md-2 col-12 headAbout d-flex justify-content-center justify-content-md-start align-self-start'>Why Allocate?</div>
                    <p className='col-md-10 col-12'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti distinctio tenetur debitis aperiam ab temporibus soluta vel possimus maxime quidem rem non quam nesciunt eum placeat quo, reprehenderit necessitatibus beatae? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod, consectetur dicta eligendi quia aut quo minus harum iste deserunt. Voluptate omnis suscipit beatae non fuga optio magni veritatis labore eveniet.
                    Error distinctio ullam qui maiores asperiores. Doloribus, dolore fuga omnis illo accusamus maxime et magnam quam temporibus voluptas nesciunt corrupti cum corporis dolores nostrum sed, fugiat inventore distinctio repellendus commodi?
                    Accusantium, animi molestias quis temporibus esse molestiae quos, quam velit magnam vel eius, labore mollitia corrupti dolor maiores est distinctio eligendi earum! Distinctio illo consequuntur odio, ratione quasi ea exercitationem.</p>
                </motion.div>
                <motion.div initial={{ x: '100vw' }} animate={{ x: 0 }} transition={{duration: 1.5,bounce: 0.3,type:'spring'} } className='col-12 justify-content-between d-flex flex-md-row flex-column textbox pb-3'>
                    <div className='col-md-2 col-12 headAbout d-flex justify-content-center justify-content-md-start align-self-start'>MISSION</div>
                    <p className='col-md-10 col-12'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti distinctio tenetur debitis aperiam ab temporibus soluta vel possimus maxime quidem rem non quam nesciunt eum placeat quo, reprehenderit necessitatibus beatae? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda iure a dolor provident nisi aliquam molestias, ipsa ut aperiam beatae porro tempora repellat velit accusantium voluptatum voluptates mollitia voluptate sapiente?
                    Ducimus accusantium, molestiae molestias magnam corrupti autem reiciendis eius ex repellendus quam suscipit magni exercitationem neque fuga sequi consectetur id deleniti voluptatem. Facilis blanditiis obcaecati qui quis, quisquam porro earum!
                    Numquam, deleniti excepturi? Unde magni iusto, accusantium numquam fuga veniam, ipsam quis corrupti fugiat est quasi totam eius cum nesciunt nostrum? Veniam quae sint esse, reiciendis natus corporis? Quia, id.</p>
                </motion.div>
                <motion.div
                    initial={{ x: '-100vw' }}
                    animate={{ x: 0 }}
                    transition={{duration: 1.5,bounce: 0.3,type:'spring'} }
                    className='col-12 d-flex flex-md-row flex-column justify-content-between textbox pb-3'>
                    <div className='col-md-2 col-12 headAbout d-flex justify-content-center justify-content-md-start align-self-start'>Vision</div>
                    <p className='col-md-10 col-12'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti distinctio tenetur debitis aperiam ab temporibus soluta vel possimus maxime quidem rem non quam nesciunt eum placeat quo, reprehenderit necessitatibus beatae? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda iure a dolor provident nisi aliquam molestias, ipsa ut aperiam beatae porro tempora repellat velit accusantium voluptatum voluptates mollitia voluptate sapiente?
                    Ducimus accusantium, molestiae molestias magnam corrupti autem reiciendis eius ex repellendus quam suscipit magni exercitationem neque fuga sequi consectetur id deleniti voluptatem. Facilis blanditiis obcaecati qui quis, quisquam porro earum!
                    Numquam, deleniti excepturi? Unde magni iusto, accusantium numquam fuga veniam, ipsam quis corrupti fugiat est quasi totam eius cum nesciunt nostrum? Veniam quae sint esse, reiciendis natus corporis? Quia, id.</p>
                </motion.div>
            </div>
        </div>
        <div className='row'>
            <div className='col-12 d-flex acheivements '>
                
                <div className='col-3 d-flex my-5 flex-column align-items-center'>
                    <Diversity3OutlinedIcon sx={{ fontSize: '4rem' }} className='col-12 mb-2' />
                    <CountUp suffix='+'  style={{ fontFamily: 'Oswald, sans-serif', fontSize: '1.5rem' }} className='col-12 text-center' start={0} end={100} duration={4} delay={0} enableScrollSpy={true} />
                    <div className='col-12 text-center'>Employees</div>
                </div>
                <div className='col-3 d-flex my-5 flex-column align-items-center'>
                    <EngineeringOutlinedIcon sx={{ fontSize: '4rem' }} className='col-12 mb-2' />
                    <CountUp suffix='+'  style={{ fontFamily: 'Oswald, sans-serif', fontSize: '1.5rem' }} className='col-12 text-center' start={0} end={200} duration={4} delay={0} enableScrollSpy={true} />
                    <div className='col-12 text-center'>Developers</div>
                </div>
                    <div className='col-3 d-flex my-5 flex-column align-items-center'>
                    <EmojiTransportationOutlinedIcon sx={{ fontSize: '4rem' }} className='col-12 mb-2' />
                    <CountUp suffix='+'  style={{ fontFamily: 'Oswald, sans-serif', fontSize: '1.5rem' }} className='col-12 text-center' start={0} end={250} duration={4} delay={0} enableScrollSpy={true} />
                    <div className='col-12 text-center'>Projects</div>
                </div>
                 <div className='col-3 d-flex my-5 flex-column align-items-center'>
                    <HomeOutlinedIcon sx={{ fontSize: '4rem' }} className='col-12 mb-2' />
                    <CountUp  suffix='+'  style={{ fontFamily: 'Oswald, sans-serif', fontSize: '1.5rem' }} className='col-12 text-center' start={0} end={550} duration={4} delay={0} enableScrollSpy={true} />
                    <div className='col-12 text-center'>Properties</div>
                </div>
            </div>
        </div>
    </motion.div>
)
}

export default About