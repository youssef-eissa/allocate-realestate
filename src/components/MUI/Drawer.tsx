import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import { Sling as Hamburger } from 'hamburger-react'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setPurpose, resetProperties, setProperties } from '../redux/properties'
import { apiData } from '../types/apiTypes'




type Anchor = 'top' | 'left' | 'bottom' | 'right';

type TDrawer={
    ForSale:apiData[]
    ForRent:apiData[]

}
export default function TemporaryDrawer({ ForSale, ForRent }: TDrawer) {
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
    </List>
   
    </Box>
);
    function handlePurpose(){
        dispatch(setPurpose('Properties'))
        window.scrollTo(0, 0)
        dispatch(resetProperties())
        dispatch(setProperties(allProperties))
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