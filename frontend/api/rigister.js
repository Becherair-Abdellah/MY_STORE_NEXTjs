import axios from "axios";
export const rigister = async(file)=>{
    const url = "https://tarmeezacademy.com/api/v1/register";
    const formData = new FormData();
    formData.append("username",'abdellah_bechxeraxir');
    formData.append("password",'abdellah_becheraxxir');
    console.log(file)
    formData.append("image",file);
    formData.append("name",'abdellahx04x');
    formData.append("email",'abdellah.becherxair@gmail.xcom');

    const config = {
        headers:{
            "Content-Type": "application/json",
        }
    }
    let req = await axios.post(url,formData,config    );
    console.log(req);
};