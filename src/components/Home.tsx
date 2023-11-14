import './home.css'
import BuyAndRent from './BuyAndRent'
import HomeImg from './HomeImg'
import SaleNewProperties from './SaleNewProperties'
import { apiData } from './types/apiTypes'
import RentNewProperties from './RentNewProperties'
import Testimonials from './Testimonials'
import CompanyInfo from './CompanyInfo'



type THome = {
    ForSale: apiData[]
    ForRent: apiData[]
    isFetching: boolean
    isSuccess: boolean
    ForRentSuccess: boolean
}
function Home({ForSale,isFetching,isSuccess,ForRent,ForRentSuccess}:THome) {
return (
    <div className="container-fluid">
        <HomeImg/>
        <BuyAndRent/>
        <SaleNewProperties ForSale={ForSale}  isFetching={isFetching} isSuccess={isSuccess} />
        <RentNewProperties ForRentSuccess={ForRentSuccess} ForRent={ForRent} />
        <Testimonials />
        <CompanyInfo/>
    </div>
)
}

export default Home