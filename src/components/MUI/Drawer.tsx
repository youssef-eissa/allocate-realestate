import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import { Sling as Hamburger } from 'hamburger-react'
import { Link,useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { setPurpose, resetProperties, setProperties } from '../redux/properties'
import { apiData } from '../types/apiTypes'
import { setLogout, resetUser } from '../redux/user';
import FallbackAvatars from './Avatar';





type Anchor = 'top' | 'left' | 'bottom' | 'right';

type TDrawer={
    ForSale:apiData[]
    ForRent: apiData[]
    user:any

}
export default function TemporaryDrawer({ ForSale, ForRent,user }: TDrawer) {
        const isLogged = useSelector((state: { user: { islogged: any } }) => state.user.islogged)
    const navigate=useNavigate()
    const location = useLocation()
    const dispatch = useDispatch()
    const allProperties = ForSale.concat(ForRent)


    const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
});

const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
        return;
    }

    setState({ ...state, [anchor]: open });
    };

const list   = (anchor: Anchor) => (
    <Box
    sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250,backgroundColor:'#0B2447',height:'100%',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center' }}
    role="presentation"
    onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
        
    >
    <List className='d-flex col-12 flex-column row-gap-5 '>
        <Link onClick={()=>window.scrollTo(0,0)} style={location.pathname==='/'?{color:'crimson'}:{color:'white'}} to='/' className='col-12 text-center toPage'>Home</Link>
        <Link onClick={() => handlePurpose()} style={location.pathname==='/properties'?{color:'crimson'}:{color:'white'}} to='/properties' className='col-12 text-center  toPage'>Properties</Link>
        <Link onClick={()=>window.scrollTo(0,0)} style={location.pathname==='/about'?{color:'crimson'}:{color:'white'}} to='/about' className='col-12 text-center toPage'>About</Link>
            <Link onClick={() => window.scrollTo(0, 0)} style={location.pathname === '/contact' ? { color: 'crimson' } : { color: 'white' }} to='/contact' className='col-12 toPage text-center'>Contact</Link>
            {isLogged && user?.type==='admin' && <Link style={location.pathname === '/dashboard' ? { color: 'crimson' } : { color: 'white' }} onClick={() => { window.scrollTo(0, 0); }} to='/dashboard' className='col-12 text-center toPage'>Dashboard</Link>}
            {isLogged?<div onClick={()=>handleSignout()}  className='col-12 text-center toPage d-flex justify-content-center align-items-center'>
                    Sign Out
                </div>:<Link onClick={()=>window.scrollTo(0,0)} to='/signin' className='col-12 text-center toPage d-flex justify-content-center align-items-center'>
                    Sign In
            </Link>}
            {isLogged && <div className='col-12 d-flex justify-content-center toPage'>
            <FallbackAvatars/>
            </div>}
    </List>
   
    </Box>
);
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
    <div>
    {(['left', ] as const).map((anchor) => (
        <React.Fragment key={anchor}>
        <Button onClick={toggleDrawer(anchor, true)}><Hamburger toggled={state[anchor]} color='white'/></Button>
        <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
        >
            {list(anchor)}
        </Drawer>
        </React.Fragment>
    ))}
    </div>
);
}