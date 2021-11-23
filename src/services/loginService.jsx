import http from "./http";

export const loginUser = (data)=>{
    return http.post('http://localhost:3300/auth/login' , data)
}
