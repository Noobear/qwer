import React from 'react';
import axios from 'axios';


function DeleteDiary(e) {

    axios({
        method: 'delete',
        url: `/diary/delete/${e}`,
        headers : {
            'Authorization' : localStorage.getItem("Authorization"),
            'refreshToken' : localStorage.getItem("refreshToken"),
        },
    })
        .then( (response) => {
            alert("삭제가 완료되었습니다.");
        })
        .catch( (error) => {
            console.log(error)
        });

    return(0);
}

export default DeleteDiary;