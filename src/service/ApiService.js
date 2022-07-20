// import { API_BASE_URL } from "../app-config";
import {Functions} from "@mui/icons-material";

const Authoriza = "Authorization";

export function call(api, method, request) {
    let headers = new Headers({
        "Content-Type": "application/json",
    });
    // 로컬 스토리지에서 ACCESS TOKEN 가져오기
    const Authorization = localStorage.getItem("Authorization");
    console.log(Authorization);

    if (Authorization && Authorization !== null) {
        headers.append("Authorization", Authorization);
    }

    let options = {
        headers: headers,
        url: api,
        method: method,
        mode: "cors"
    };

    if (request) {
        // GET method
        options.body = JSON.stringify(request);

        console.log("request : ",headers);


        // console.log("options.body : ",options.body);
        // console.log("options.url : ",options.url);
    }
    return fetch(options.url, options)
        .then((response) => {
                if (!response.ok) {
                    // response.ok가 true이면 정상적인 리스폰스를 받은것, 아니면 에러 리스폰스를 받은것.
                    return Promise.reject(response);
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

        if (response.headers.get("Authorization") && response.headers.get("refreshToken")) {
            // 로컬 스토리지에 토큰 저장

            localStorage.setItem("Authorization",response.headers.get("Authorization"));
            localStorage.setItem("refreshToken",response.headers.get("refreshToken"));

            // token이 존재하는 경우
            window.location.href = "/auth";
        }
    });
}

// export function signout() {
//     localStorage.setItem(Authorization, null);
//     window.location.href = "/login";
// }

export function signup(userDTO) {

    return call("/auth/signup", "POST", userDTO);
}