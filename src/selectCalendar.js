import * as React from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

export default function MaterialUIPickers() {
    const [value, setValue] = React.useState(new Date('2000-01-18'));

    const handleChange = (newValue) => {
        setValue(newValue);
        console.log(value)
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Stack>
                <DesktopDatePicker
                    label="생년월일"
                    inputFormat="yyyy/MM/dd"
                    value={value}
                    name={"birthDay"}
                    onChange={handleChange}
                    renderInput={
                    (params) => <TextField {...params} name={"birthDay"}/>}
                />
            </Stack>
        </LocalizationProvider>
    );
}
