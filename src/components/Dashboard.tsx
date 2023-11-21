import { StyledPageHead } from '../StyledComponents/PageHead.style'
import headBG from '../assets/contactImg.webp'
import { useSelector } from 'react-redux'


function Dashboard() {
    const user=useSelector((state:{user:{user:any}})=>state.user.user)

    return (
        <div className='container-fluid'>
            <div className='row'>
                <StyledPageHead className='col-12  d-flex flex-column justify-content-center align-items-center' background={headBG}>
                <div className="overlay"></div>
                <div className='col-12 title text-center'>Admin dashboard</div>
                <h2 className='col-12 text-center'>Admin {user?.name.toUpperCase()}</h2>
                </StyledPageHead>
            </div>
    </div>
)
}

export default Dashboard