import { StyledPageHead } from '../StyledComponents/PageHead.style'
import headBG from '../assets/contactImg.webp'
import { useSelector } from 'react-redux'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { Button } from '../StyledComponents/Button.style';
import './dashboard.css'
import React, { useEffect, useState } from 'react';
import { Link ,Outlet,OutletProps} from 'react-router-dom';
import CalendarPage from './CalendarPage';
const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
        props,
        ref,
    ) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });


type TDashboard = {
    users:any
}
function Dashboard({ users }: TDashboard) {
console.log(Outlet);
    
    const [NotificationOpen, setNotificationOpen] = useState<boolean>(false);
    const map = users?.map((user: any) => user.sell).flat().length
    const [count,setcount] = useState(0)
    const user = useSelector((state: { user: { user: any } }) => state.user.user)
        const handleClick = () => {
    setNotificationOpen(true);
        };
    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
        return;
    }
    setNotificationOpen(false);
    };

    
    

    return (
        <div className='container-fluid '>
            <div className='row'>
                <StyledPageHead className='col-12  d-flex flex-column justify-content-center align-items-center' background={headBG}>
                <div className="overlay"></div>
                <div className='col-12 title text-center'>Admin dashboard</div>
                <h2 className='col-12 text-center'>Admin {user?.name.toUpperCase()}</h2>
                </StyledPageHead>
            </div>
            
                <div className='py-2'>
                <CalendarPage/>
                </div>
            
    </div>
)
}

export default Dashboard
{/* <Snackbar  open={NotificationOpen}  autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Account created successfully
                </Alert>
                </Snackbar> */}