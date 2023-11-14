import './home.css'
import BuyAndRent from './BuyAndRent'
import HomeImg from './HomeImg'
import SaleNewProperties from './SaleNewProperties'
import { apiData } from './types/apiTypes'
import RentNewProperties from './RentNewProperties'
import Testimonials from './Testimonials'
import CompanyInfo from './CompanyInfo'
import { motion } from 'framer-motion'




type THome = {
    ForSale: apiData[]
    ForRent: apiData[]
    isFetching: boolean
    isSuccess: boolean
    ForRentSuccess: boolean
}
function Home({ ForSale, isFetching, isSuccess, ForRent, ForRentSuccess }: THome) {
   
return (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2,type: "spring" }}
        className="container-fluid">
        <HomeImg/>
        <BuyAndRent/>
        <SaleNewProperties ForSale={ForSale}  isFetching={isFetching} isSuccess={isSuccess} />
        <RentNewProperties ForRentSuccess={ForRentSuccess} ForRent={ForRent} />
        <Testimonials />
        <CompanyInfo/>
    </motion.div>
)
}

export default Home