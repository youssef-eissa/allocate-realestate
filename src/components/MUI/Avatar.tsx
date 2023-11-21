import { useSelector } from 'react-redux'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export default function FallbackAvatars() {
    const user = useSelector((state: { user: { user: any } }) => state.user.user)
    

    return (
    <Stack direction="row" >
        
        <Avatar
        sx={{backgroundColor:'crimson' }}
        alt={user?.name.toUpperCase()}
        src="/broken-image.jpg"
        />
    </Stack>
);
}