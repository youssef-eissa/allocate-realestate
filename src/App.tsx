import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { useQuery } from "@tanstack/react-query";
import { ForSaleFetch,ForRentFetch } from "./components/fetches/APIfetches";
import { apiData } from "./components/types/apiTypes";
import { Triangle } from "react-loader-spinner";
import ContactUsSection from "./components/ContactUsSection";
import Footer from "./components/Footer";



function App() {
const {data:ForSale,isFetching,isSuccess}=useQuery({
  queryKey: ["ForSale"],
  queryFn: ForSaleFetch,
  select: (data) => data.data.hits,
  refetchIntervalInBackground: false,
  refetchOnWindowFocus: false,
    staleTime: 1000 * 6000,


})
  
  const {data:ForRent ,isFetching:ForRentFetching,isSuccess:ForRentSuccess} = useQuery({
    queryKey: ["ForRent"],
    queryFn: ForRentFetch,
    select: (data) => data.data.hits,
    refetchIntervalInBackground: false,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 6000,
    
  })

  if (isFetching||ForRentFetching) {
    return <div className="container-fluid">
      <div className="row">
        <div className="col-12 d-flex justify-content-center align-items-center vh-100">
          <Triangle color="crimson" height={200} width={200}/>
        </div>
      </div>
    </div>
  }

  

  return (
    <div className="container-fluid p-0">
        <Navbar/>
      <Routes>
        <Route path="/" element={<Home ForSale={ForSale as apiData[]} ForRent={ForRent as apiData[]} isFetching={isFetching} isSuccess={isSuccess} ForRentSuccess={ForRentSuccess} />}/>
      </Routes>
      <ContactUsSection />
      <Footer/>
    </div>
  );
}

export default App;
