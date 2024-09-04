const {validationResult} = require('express-validator');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');

const HttpError = require('../Models/http-error');
const User = require('../Models/ListItems');


const signup = async(req,res,next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return next(new HttpError('Invalid inputs passed, please check your data.',422)); 
    }

    const {name,email,password} = req.body;

    let existingUser;

    try{
        existingUser = await User.findOne({ email: email })
    }catch(err){
        const error = new HttpError('Signing up failed, please try again later.',500);
        return next(error);
    }

    if(existingUser){
        const error = new HttpError('User exists already, please login instead.',422);
        return next(error);
    }

    let hashedPassword;

    try{
        hashedPassword = await bcrypt.hash(password, 12);  
    }catch(err){
        const error = new HttpError('Could not crete user, please try again.',500);
        return next(error);
    }
    

    const createdUser = new User({
        name,
        email,
        password: hashedPassword,
        image: req.file.path,
    });

    try{
        await createdUser.save();
    }catch(err){
        const error = new HttpError('Signing Up failed, please try again.',500);
        return next(error);
    }

    //token

    let token;

    try{
        token = jwt.sign({userId: createdUser.id, email: createdUser.email}, process.env.JWT_KEY, {expiresIn:'1h'}); 
    }catch(err){
        const error = new HttpError('Signing up failed, please try again later.',500);
        return next(error);
    }

    res.status(201).json({userId: createdUser.id, email: createdUser.email, token: token});
};

const login = async(req,res,next) => {
    const { email,password} = req.body;

    let identifiedUser;
    try{
        identifiedUser = await User.findOne({email : email});
    }catch(err){
        const error = new HttpError('Logging in failed,please try again later.',500);
        return next(error);
    }

    if(!identifiedUser ){
        const error = new HttpError('Invalid credentials, could not log you in.',403);
        return next(error);
    }

    //checking password using bcrypt
    let isValidPassword = false;
    try{
        isValidPassword = await bcrypt.compare(password, identifiedUser.password);
    }catch(err){
        const error = new HttpError('Could not log you in, check your credentials and try again.',500);
        return next(error);
    }

    if(!isValidPassword){
        const error = new HttpError('Invalid credentials, could not log you in.',401);
        return next(error);
    }

    //token

    let token;
    try {
        token = jwt.sign({userId: identifiedUser.id, email: identifiedUser.email}, process.env.JWT_KEY, {expiresIn:'1h'});
    } catch (err) {
        const error = new HttpError('Logging in failed,please try again later.',401);
        return next(error);
    }

    res.json({userId: identifiedUser.id, email: identifiedUser.email, token: token});
};

exports.signup = signup;
exports.login = login;