import {
    Router
} from 'express'
import passport from 'passport';
import { register,
    failRegister,
    login,
    logout,
    current,
    github,
    githubCallback } from '../../controllers/sessions.controller.js'
import jwt from 'jsonwebtoken'



const router = Router()

const authenticateToken = (req, res, next) => {

    const authHeader = req.headers['authorization'];
    console.log(authHeader)
    
    const token = authHeader && authHeader.split('')[1];
    
    if (token == null) {
    
    return res.sendStatus(401);
    
    }
    
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    
    if (err) {
    
    return res.sendStatus(403);
    
    }
    
    req.user = user;
    
    next();
    
    });
    
    }


router.post('/register', passport.authenticate('register', {
    failureRedirect: 'fail-register'
}), register)

router.get('/fail-register', failRegister)

router.post('/login', login);

router.get('/logout', logout)

router.get('/current', passport.authenticate("current", {
    session: false
}), current)

router.get('/github', passport.authenticate('github', {
    scope: ['user:email']
}), github)

router.get('/github-callback', passport.authenticate('github', {
    failureRedirect: '/login'
}), githubCallback)

export default router