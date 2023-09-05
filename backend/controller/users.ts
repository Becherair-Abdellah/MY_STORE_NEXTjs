import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import Pouchdb from "pouchdb";
Pouchdb.plugin(require('pouchdb-find'));
import * as EmailValidator from 'email-validator';



let secret_key :any = process.env.ACCES_TOKEN;

export const signup = async (req:any,res:any) => {
    let { email, password } = req.body;
    let validEmail = EmailValidator.validate(email); // true
    if(!validEmail || password == ''){
        res.status(400).json({message:'Email not valid.'});
        return;
    }    
    const db = new Pouchdb('http://admin:tarekch22@34.224.89.206:5984/users');
    let user = await db.find({
        selector:{
            email:email
        }
    }).then((response:any) => {
        if(response.bookmark != 'nil'){
            res.status(422).json({message:'User already exist.'})
        }else {
            const salt = bcrypt.genSaltSync(10);
            password = bcrypt.hashSync(password, salt)
            let data = {
                'email':email,
                password:password
            }
            db.post(data);
            let payload:any = {
                'email':email
            }
            let token :any = jwt.sign(payload,secret_key);
            res.status(200).json({ token: token})
        }
    })    
}

export const signin = async (req:any,res:any) => {
    try{
        let { email, password } = req.body;
        if(email == '' || password == ''){
            res.status(401).json({message:'Unauthorized'})
            return;
        }    
        const db = new Pouchdb('http://admin:tarekch22@34.224.89.206:5984/users');
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