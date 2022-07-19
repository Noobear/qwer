// import { API_BASE_URL } from "../app-config";
const Authorization = "Authorization";

export function call(api, method, request) {
    let headers = new Headers({
        "Content-Type": "application/json",
    });

    // 로컬 스토리지에서 ACCESS TOKEN 가져오기
    const Authorization = localStorage.getItem("Authorization");
    if (Authorization && Authorization !== null) {
        headers.append("Authorization", "Bearer "+Authorization);
    }

    let options = {
        headers: headers,
        url: api,
        method: method,
    };

    if (request) {
        // GET method
        options.body = JSON.stringify(request);
        console.log("options : ",options);
        // console.log("options.body : ",options.body);
        // console.log("options.url : ",options.url);
    }
    return fetch(options.url, options)
        .then((response) =>
            response.json().then((json) => {
                if (!response.ok) {
                    // response.ok가 true이면 정상적인 리스폰스를 받은것, 아니면 에러 리스폰스를 받은것.
                    return Promise.reject(json);

                }
                return json;
            })
        )
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
        console.log(response);

        if (response.token) {
            // 로컬 스토리지에 토큰 저장
            localStorage.setItem(Authorization, response.token);
            // token이 존재하는 경우
            window.location.href = "/auth";
        }
    });
}

// export function signout() {
//     localStorage.setItem(ACCESS_TOKEN, null);
//     window.location.href = "/login";
// }

export function signup(userDTO) {
    return call("/auth/signup", "POST", userDTO);
}