import './css/App.css';
import React, { useState, useEffect } from 'react';
import axios from "axios";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // css import


function TEST() {
    const [value, onChange] = useState(new Date());
    return(
        <div>
            <Calendar onChange={onChange} value={value} />
        </div>
    );

}
export default TEST;