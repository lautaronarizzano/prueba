import userModel from '../dao/models/usersModel.js'
import {
    generateToken,
    isValidPassword
} from '../utils.js';


const register = async (req, res) => {
    res.send({
        status: 'success',
        message: 'user Registered'
    })
}

const failRegister = async (req, res) => {
    res.send({
        status: 'error',
        message: 'register failed'
    })
}

const login = async (req, res) => {
    const {
        email,
        password
    } = req.body

    try {
        const user = await userModel.findOne({
            email: email
        })

        if (!user) {
            return res.status(404).send('User not found')
        }

        if (!isValidPassword(user, password)) return res.status(400).send('Incorrect credentials')

        const accessToken = generateToken(user)

        res.cookie('cookieToken', accessToken, {
                maxAge: 60 * 60 * 1000,
                httpOnly: true
            })
            .send({
                status: 'success',
                message: 'login success'
            });
    } catch (error) {
        res.status(400).send({
            error: error
        })
    }
}


const logout = async (req, res) => {
    res.clearCookie('cookieToken')
    res.redirect('/login')
}

const current = async (req, res) => {
    res.status(200).send({
        status: 'success',
        payload: req.user
    })
}

const github = async (req, res) => {
    res.send({
        status: 'success',
        message: 'user registered'
    })
}

const githubCallback = async (req, res) => {
    req.session.user = req.user
    res.redirect('/products')
}

export {
    register,
    failRegister,
    login,
    logout,
    current,
    github,
    githubCallback
}