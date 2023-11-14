import './navbar.css'
import logo from '../assets/theLogo.jpeg'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useEffect, useState,useRef } from 'react'
function Navbar() {
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
return (
    <div ref={ref} className='container-fluid navBar py-2'>
        <div  className='row d-flex justify-content-center'>
            <div className='col-10 d-flex justify-content-between p-0'>
                <Link onClick={()=>window.scrollTo(0,0)} to='/' className='col-3 LogoBox d-flex'>
                    <img src={logo} alt="logo" className='img-fluid ' />
                    <div className='col-7 d-flex flex-column justify-content-end CompanyName'>
                        <span className='col-12'>Allocate</span>
                        <span className='col-12'>Real Estate Consultancy</span>
                    </div>
                </Link>
                <div className='col-6 d-flex justify-content-around align-items-center'>
                    <Link onClick={()=>window.scrollTo(0,0)} style={location.pathname==='/'?{color:'crimson'}:{color:'white'}} to='/' className='col-3 toPage'>Home</Link>
                    <Link onClick={()=>window.scrollTo(0,0)} style={location.pathname==='/properties'?{color:'crimson'}:{color:'white'}} to='/properties' className='col-3 toPage'>Properties</Link>
                    <Link onClick={()=>window.scrollTo(0,0)} style={location.pathname==='/about'?{color:'crimson'}:{color:'white'}} to='/about' className='col-3 toPage'>About</Link>
                    <Link onClick={()=>window.scrollTo(0,0)} style={location.pathname==='/contact'?{color:'crimson'}:{color:'white'}} to='/contact' className='col-3 toPage'>Contact</Link>
                </div>
            </div>
            <div className='col-12 scrollBarBG'>
                <div ref={Progref} className='col-12 scrollBarBGProgress'></div>
            </div>
        </div>
    </div>
)
}

export default Navbar