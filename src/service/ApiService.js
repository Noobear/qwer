// import { API_BASE_URL } from "../app-config";
// import {Functions} from "@mui/icons-material";
// import {useHistory} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import axios from "axios";


export function call(api, method, request) {
    let headers = new Headers({
        "Content-Type": "application/json",
    });
    // 로컬 스토리지에서 ACCESS TOKEN 가져오기
    const Authorization = localStorage.getItem("Authorization");
    console.log(Authorization);
    const e1 = localStorage.getItem("Authorization");
    const e2 = localStorage.getItem("refreshToken");
    if (e1 && e2 !== null) {
        headers.append("Authorization", e1);
        headers.append("refreshToken", e2);
    }
    // if (Authorization && Authorization !== null) {
    //     headers.append("Authorization", Authorization);
    // }
    let options = {
        headers: headers,
        url: api,
        method: method,
        mode: "cors"
    }
    if (request) {
        // GET method
        options.body = JSON.stringify(request);
        console.log("request : ",headers);
    }
    return fetch(options.url, options)
        .then((response) => {
                if (!response.ok) {
                    // response.ok가 true이면 정상적인 리스폰스를 받은것, 아니면 에러 리스폰스를 받은것.
                    return (Promise.reject(response));
                }
                return response;
            })
        .catch((error) => {
            // 추가된 부분
            console.log("error.status : ",error.status);
            console.log("error : ",error);
            if (error.status === 403) {
                window.location.href = "/"; // redirect
            }
            return Promise.reject(error);
        });
}

export function login(loginDTO) {
    return call("/login", "POST", loginDTO).then((response) => {
        if (response.ok) {
            console.log('222'+response.headers.get("Authorization"));
            // 로컬 스토리지에 토큰 저장
            localStorage.setItem("Authorization",response.headers.get("Authorization"));
            localStorage.setItem("refreshToken",response.headers.get("refreshToken"));
            // token이 존재하는 경우
            const Auth = localStorage.getItem("Authorization");
            const refresh = localStorage.getItem("refreshToken");
            axios.defaults.headers.common[
                "Authorization"
                ] = `${Auth}`
            axios.defaults.headers.common[
                "refreshToken"
                ]=`${refresh}`
            axios.defaults.headers.common[
                "Content-Type"
                ]='application/json'
            console.log(axios.defaults.headers.common);
            window.location.href = "/main"; // 라우터로 변경
        }
        if (response) {
            const navigate = useNavigate();
            // 로컬 스토리지에 토큰 저장
            // localStorage.setItem("Authorization",response.headers.get("Authorization"));
            // localStorage.setItem("refreshToken",response.headers.get("refreshToken"));
            // token이 존재하는 경우
            // window.location.href = "/auth";
            navigate('/main', {replace: true});
        }
    });
}


export function signOut() {
    axios({
        method: 'delete',
        url: "/api/logout",
        headers : {
            'Authorization' : localStorage.getItem("Authorization"),
            'refreshToken' : localStorage.getItem("refreshToken"),
        },
    })
        .then( () => {
            localStorage.removeItem("Authorization")
            localStorage.removeItem("refreshToken")
            window.location.href = "/"})
        .catch( () => {
            localStorage.removeItem("Authorization")
            localStorage.removeItem("refreshToken")
            window.location.href = "/"}); // 토큰 만료 되어있을 때에도 일단 로그아웃은 가능하게 만듬.
}

export function signup(signUpDTO) {
    return call("/join/admin", "POST", signUpDTO).then((response) => {
        if (response.ok) {
            window.location.href = "/"
        }
    })
}