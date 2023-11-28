import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


type TSelect = {
    type:string
    onchange: any
}
export default function SelectVariants({type,onchange}:TSelect) {

return (
    <div>
    <FormControl variant="standard" sx={{ m: 1, minWidth: '50%', }}>
        <InputLabel sx={{fontSize:'20px'}} id="demo-simple-select-standard-label">Type</InputLabel>
        <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={type}
            onChange={onchange}
            label="type"
            sx={{ fontSize: '20px', paddingTop: '10px' }}
            name='type'
        >
            <MenuItem value='apartment'>Apartment</MenuItem>
            <MenuItem value='villa'>Villa</MenuItem>
            <MenuItem value='twinhouse'>Twin House</MenuItem>
        </Select>
        </FormControl>
      
    </div>
    );
}