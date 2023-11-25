import './navbar.css'
import logo from '../assets/theLogo.jpeg'
import { Link } from 'react-router-dom'
import { useLocation,useNavigate, } from 'react-router-dom'
import React, { useEffect, useState, useRef, useCallback } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { setPurpose, resetProperties, setProperties } from './redux/properties'
import { apiData } from './types/apiTypes'
import TemporaryDrawer from './MUI/Drawer'
import FallbackAvatars from './MUI/Avatar'
import { setLogout, resetUser } from './redux/user';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';


const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
        props,
        ref,
    ) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });

type TNavBar={
    ForSale:apiData[]
    ForRent: apiData[]
    users:any
    }
function Navbar({ ForSale, ForRent, users }: TNavBar) {
        const [NotificationOpen, setNotificationOpen] = useState<boolean>(false);
        const map = users?.map((user: any) => user.sell).flat().length
        const handleClick = () => {
    setNotificationOpen(true);
        };
    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
        return;
    }
    setNotificationOpen(false);
    };
    const allProperties = ForSale.concat(ForRent)
    const isLogged = useSelector((state: { user: { islogged: any } }) => state.user.islogged)
    const user = useSelector((state: { user: { user: any } }) => state.user.user)
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const location = useLocation()
    const ref=useRef<HTMLDivElement>(null)
    const Progref=useRef<HTMLDivElement>(null)
    const [scrolled, setScroll] = useState<number>(0)
    function handleScrollNavBar() {
        
        const currentScroll = window.scrollY
        if (currentScroll>scrolled+100&& ref.current) {
            ref.current.style.transform = 'translateY(-100%)'
            setScroll(currentScroll)
        } else if (currentScroll + 100 < scrolled && ref.current) {
            ref.current.style.transform = 'translateY(0)'
            ref.current.style.position='fixed'
            ref.current.style.top='0'
            setScroll(currentScroll)
        } else if(currentScroll===0 && ref.current){
            ref.current.style.position = 'relative'
            setScroll(currentScroll)
            
        }
        
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScrollNavBar)
        return () => {
            window.removeEventListener('scroll', handleScrollNavBar)
        }
    })
    function handleScrollProgressBar(){
    if (Progref.current) {
        Progref.current.style.width = `${(window.scrollY/ (document.body.scrollHeight - window.innerHeight)) * 100}%`
    }
}
    useEffect(() => {
        window.addEventListener('scroll', handleScrollProgressBar)
        return () => {
            window.removeEventListener('scroll', handleScrollProgressBar)
        }
    })
    function handlePurpose(){
        dispatch(setPurpose('Properties'))
        window.scrollTo(0, 0)
        dispatch(resetProperties())
        dispatch(setProperties(allProperties))
    }
    function handleSignout(){
        dispatch(setLogout())
        dispatch(resetUser())
        window.scrollTo(0, 0)
        navigate('/')
    }
    
    
return (
    <div ref={ref} className='container-fluid navBar py-2'>
        <div  className='row d-flex justify-content-center'>
            <div className='col-11 d-flex justify-content-between p-0'>
                <Link onClick={()=>window.scrollTo(0,0)} to='/' className='col-3 LogoBox d-flex justify-content-center'>
                    <img src={logo} alt="logo" className='img-fluid ' />
                    <div className='col-7 d-none d-md-flex flex-column justify-content-end CompanyName'>
                        <span className='col-12'>Allocate</span>
                        <span className='col-12'>Real Estate Consultancy</span>
                    </div>
                </Link>
                <div className='col-6 d-none d-md-flex justify-content-around align-items-center'>
                    <Link onClick={()=>window.scrollTo(0,0)} style={location.pathname==='/'?{color:'crimson'}:{color:'white'}} to='/' className='col-3 toPage'>Home</Link>
                    <Link onClick={() => handlePurpose()} style={location.pathname==='/properties'?{color:'crimson'}:{color:'white'}} to='/properties' className='col-3 toPage'>Properties</Link>
                    <Link  onClick={()=>window.scrollTo(0,0)} style={location.pathname==='/about'?{color:'crimson'}:{color:'white'}} to='/about'  className='col-3 toPage'>About</Link>
                    <Link  onClick={() => window.scrollTo(0, 0)} style={location.pathname === '/contact' ? { color: 'crimson' } : { color: 'white' }} to={{pathname:'/contact'}} className='col-3 toPage'>Contact</Link>
                </div>
                {isLogged ? <div className='col-md-3  d-md-flex d-none align-items-center'>
                    {user?.type === 'admin' && <Link style={location.pathname === '/dashboard' ? { color: 'crimson' } : { color: 'white' }} onClick={() => { window.scrollTo(0, 0); }} to='/dashboard' className='col-3 toPage'>Dashboard</Link>}
                    <div className='col-4 d-flex justify-content-center align-items-center'>
                    <FallbackAvatars/>
                    </div>
                    <div onClick={()=>handleSignout()} style={{cursor:'pointer'}} className='col-4 text-center toPage d-flex justify-content-center align-items-center'>
                    Sign Out
                </div>
                </div>:<Link onClick={()=>window.scrollTo(0,0)} to='/signin' className='col-3 toPage d-md-flex d-none justify-content-center align-items-center'>
                    Sign In
                </Link>}
                <div className='col-3 d-md-none d-flex align-items-center justify-content-end'>
                <TemporaryDrawer user={user} ForSale={ForSale} ForRent={ForRent}/>
                </div>
            </div>
            <div className='col-12 scrollBarBG'>
                <div ref={Progref} className='col-12 scrollBarBGProgress'></div>
            </div>
        </div>
          <Snackbar  open={NotificationOpen}  autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Account created successfully
                </Alert>
                </Snackbar>
    </div>
)
}

export default Navbar