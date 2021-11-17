import http from "./http";

export const signupUser = (data)=>{
    return http.post('/user/register' , data)
}
