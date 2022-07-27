import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function RowRadioButtonsGroup() {
    return (
        <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label" required>성별</FormLabel>
            <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="gender"
            >
                <FormControlLabel value="남성" name={"gender"} control={<Radio />} label="남성" />
                <FormControlLabel value="여성" name={"gender"} control={<Radio />} label="여성" />
            </RadioGroup>
        </FormControl>
    );
}

