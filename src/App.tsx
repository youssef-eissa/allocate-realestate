import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { useQuery } from "@tanstack/react-query";
import { ForSaleFetch,ForRentFetch } from "./components/fetches/APIfetches";
import { apiData } from "./components/types/apiTypes";
import { Triangle } from "react-loader-spinner";
import ContactUsSection from "./components/ContactUsSection";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Properties from "./components/Properties";
import Property from "./components/Property";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Notfound from "./components/Notfound";
import { useSelector } from 'react-redux'
import Dashboard from "./components/Dashboard";
import Sell from "./components/Sell";
import { GetTheUser } from "./components/fetches/usersAPi";
import CalendarPage from "./components/CalendarPage";



function App() {

    const user=useSelector((state:{user:{user:any}})=>state.user.user)
    const isLogged = useSelector((state: { user: { islogged: any } }) => state.user.islogged)
const {data:users}=useQuery({
  queryKey: ["GetTheUser"],
  queryFn: GetTheUser,
  select: (data) => data.data
})

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
      <Navbar users={ users as any} ForSale={ForSale as apiData[]} ForRent={ForRent as apiData[]} />
      <Routes>
        <Route  path="/" element={<Home  ForSale={ForSale as apiData[]} ForRent={ForRent as apiData[]} isFetching={isFetching} isSuccess={isSuccess} ForRentSuccess={ForRentSuccess} />} />
        <Route path='/about' element={<About/> } />
        <Route path='/contact' element={<Contact />} />
        <Route path="/properties" element={<Properties />} />
        <Route path='/properties/:propertyName' element={<Property />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signin" element={<Signin />} />
        <Route  path="*" element={<Notfound />} />
        
        {isLogged && <Route path="/sell" element={<Sell />} />}
        {user?.type === 'admin' && <Route path="/dashboard" element={<Dashboard users={users as any} />}>
        <Route path="calendar" element={<CalendarPage />}/>
        <Route path="calendarr" element={<Signup />}/>
        </Route>}
        
      </Routes>
      <ContactUsSection />
      <Footer ForSale={ForSale as apiData[]} ForRent={ForRent as apiData[]}/>
    </div>
  );
}

export default App;
