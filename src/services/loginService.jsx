import http from "./http";

export const userLogin = (data)=>{
    const {email , password}  = data;
    return http.post("https://api.freerealapi.com/auth/login"  , {email,password})
}
