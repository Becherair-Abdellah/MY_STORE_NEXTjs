import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import Pouchdb from "pouchdb";
Pouchdb.plugin(require('pouchdb-find'));



export const signup = async (req:any,res:any) => {
    let { email, password } = req.body;
    let linkDB = process.env.DB_USERS;
    const db = new Pouchdb('http://admin:admin@127.0.0.1:5984/users');
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
            let secret_key :any = process.env.ACCES_TOKEN;
            let payload:any = {
                'email':email
            }
            let token :any = jwt.sign(payload,secret_key);
            res.status(200).json({ token: token})
        }
    })    
}