import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function ComboBox() {

    return (
        <Autocomplete
            disablePortal
            id="email2"
            options={email2}
            renderInput={(params) => <TextField {...params} label="이메일 뒷 부분" name={"email2"} />}
        />
    );
}

const email2 = [
    { label: 'gmail.com'},
    { label: 'naver.com'},
    { label: 'daum.net'},
    { label: 'nate.net'},
    { label: 'hanmail.net'},
    { label: 'googlemail.com'},
    { label: 'cyworld.com'},
    { label: 'outlook.com'},
    { label: 'tistory.com'}
];
