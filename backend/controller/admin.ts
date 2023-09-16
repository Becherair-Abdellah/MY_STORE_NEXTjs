import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import Pouchdb from "pouchdb";
Pouchdb.plugin(require('pouchdb-find'));

export const authAdmin = async (req:any,res:any) => {
    let secret_key :any = process.env.ACCES_TOKEN;

    try{
        let { email, password } = req.body;
        if(email == '' || password == ''){
            res.status(401).json({message:'Unauthorized'})
            return;
        }    
        const db = new Pouchdb('http://admin:tarekch22@34.224.89.206:5984/adminbookstore');
        db.find({
            selector:{
                email:email
            }
        })
        .then((response:any) => {
            if(response.bookmark == 'nil'){
                res.status(404).json({message:'User not found.'})
            }else {
                let pass = response.docs[0].password;
                let valid = bcrypt.compareSync(password, pass);
                if(!valid){
                    res.status(401).json({ message: "Invalid email or password" });
                    return;
                }
                let payload = {
                    email: response.docs[0].email,
                };
                let token = jwt.sign(payload,secret_key);
                res.status(200).json({ token: token})            
            }
            
        })
    }
    catch (error:any) {
        return res.status(500).json({ error: error.message });
    }
    

}