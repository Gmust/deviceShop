const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {User,Basket} = require('../models/models');

const generateJWT =(id,email,role)=>{
        return  jwt.sign({id: id, email, role},
            process.env.SECRET_KEY,
            {expiresIn: '2h' }
        )
}




class UserController {

    async registration(req, res, next) {
            const {email,password,role} = req.body;
            if(!email || !password){
            return next(ApiError.badRequest('Invalid email or password'))
            }
            const candidate = await User.findOne({where: {email}})
            if(candidate){
                return next(ApiError.badRequest('User with that email is exist!'))
            }
            const hashPassword = await bcrypt.hash(password,5);
            const user = await User.create({email,role,password:hashPassword});
            const basket = await Basket.create({id: user.id});
            const token = generateJWT(user.id, user.email, user.role);
            return res.json(token);

    };

    async login(req, res,next) {
            const {email,password} = req.body;
            const user = await  User.findOne({where:{email}});
            if(!user){
                return next(ApiError.internal('Wrong Password or email'));
            }
            let comparePassword =bcrypt.compareSync(password, user.password);
            if(!comparePassword){
                return next(ApiError.internal('Wrong Password or email'));
            }
            const token = generateJWT(user.id, user.password, user.role);
            return res.json(token)
    };

    async check(req, res,next) {
            const {id} = req.query;
            if(!id){
               return   next(ApiError.badRequest('@!#!@#'))
            }


            res.json(id);

    };


}


module.exports = new UserController();