import http from "./http";

export const loginUser = (data)=>{
    return http.post('/user/login' , data)
}
