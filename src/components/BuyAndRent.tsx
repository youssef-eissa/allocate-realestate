import butImg from '../assets/buyImg.jpeg'
import rentImg from '../assets/rentImg.jpeg'
import { Link } from 'react-router-dom'
import { WrapperSection } from '../StyledComponents/Section.style'
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { apiData } from './types/apiTypes';
import { useDispatch } from 'react-redux';
import { resetProperties, setProperties, setPurpose } from './redux/properties';

type TBuyAndRent={
    ForSale:apiData[]
    ForRent:apiData[]
}

function BuyAndRent({ ForSale, ForRent }: TBuyAndRent) {
    const dispatch=useDispatch()
    const { ref, inView } = useInView({
        threshold: 0.2
    });
    const animation = useAnimation();
    useEffect(() => {
        if (inView) {
            animation.start({
                x: 0,
                transition: {
                    duration: 1.5,
                    type: 'spring',
                    bounce: 0.3
                }
            })
        } else {
            animation.start({ x: '-100vw' })
        }
    }, [inView, animation])

    function handleBuy(){
        dispatch(setPurpose('Buy'))
        window.scrollTo(0, 0)
        dispatch(resetProperties())
        dispatch(setProperties(ForSale))
    }
        function handleRent(){
        dispatch(setPurpose('Rent'))
        window.scrollTo(0, 0)
        dispatch(resetProperties())
        dispatch(setProperties(ForRent))
    }

return (
    <div  ref={ref} className='container-fluid mt-4 mt-md-0 p-0'>
        <motion.div animate={animation} className='row BuyAndRent'>
                <WrapperSection className='col-12 d-flex flex-column justify-content-center '>
                <div className='col-12 text-center SectionTitle mb-5'>
                    <div className='title col-12'>WHAT ARE YOU LOOKING FOR?</div>
                </div>
                <div className='col-12 row-gap-2 row-gap-md-0 d-flex flex-md-row flex-column'>
                    <div className='ImgCon col-md-6 col-12 justify-content-center position-relative d-flex align-items-center'>
                        <img src={butImg} alt='img' className='img-fluid w-100 h-100 position-absolute z-1' />
                        <div style={{ backgroundColor: 'rgb(25 55 109 / 43%)' }} className='col-12 position-absolute w-100 h-100 z-2'></div>
                        <Link onClick={()=>handleBuy()} to='/properties' className='col-3 position-absolute text-center toPage z-3'>Buy</Link>
                    </div>
                        <div className='ImgCon col-md-6 col-12 position-relative d-flex align-items-center justify-content-center'>
                            <img src={rentImg} alt='img' className='img-fluid w-100 h-100 position-absolute z-1' />
                            <div style={{ backgroundColor: '#ff00004a' }} className='col-12 position-absolute w-100 h-100 z-2'></div>
                            <Link onClick={()=>handleRent()} to='/properties' className='col-3 toPage position-absolute text-center z-3'>Rent</Link>
                    </div>
                </div>
            </WrapperSection>
        </motion.div>
       
    </div>
)
}

export default BuyAndRent