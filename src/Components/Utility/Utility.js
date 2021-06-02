import axios from "axios";

export const userSignup = (user) => {


    console.log(user)
    return axios.post("http://localhost:8000/api/authentication/signup",
            user
        )
        .then((response) => {
            return response.data
        })
        .catch((err) => {
            console.log(err)
        })
}

// export const signup = (req,res )=> {
//    try{

//     var{name,email}=req.body;
//     axios.post("/api/authentication/signup",
// name,email )
// console.log(name,email)
//     res.status(200).json({
//         msg:"post",
//         data:{
//             name,
//             email,
//         }
//     }) 

//     } 
   
//         catch
//          (error) {
//         console.log(error)
//     }

    
// }