import axios from "axios";
export const rigister = async(email,password)=>{
    const url = "http://localhost:4000/signup";
    // const formData = new FormData();
    // formData.append("username",'abdellah_bechxeraxir');
    // formData.append("password",'abdellah_becheraxxir');
    // console.log(file)
    // formData.append("image",file);
    // formData.append("password",'abdellahx04x');
    // formData.append("email",'abdellah.becherxair@gmail.xcom');

    const config = {
        headers:{
            "Content-Type": "application/json",
        }
    }
    let req = await axios.post(url,{
        "email" : email,
        "password": password,
    },config    );
    console.log(req);
};