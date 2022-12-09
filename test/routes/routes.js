const { request } = require('express')
const express = require('express')
const router = express.Router()
const signUpTemplate = require('../models/SginUpModels')
const signInTemplate = require('../models/SginInModels')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const JWT_SECRET = 'sdjkfh8923yhjdksbfma@#*(&@*!^#&@bhjb2qiuhesdbhjdsfg839ujkdhfjk'


//create first route --add Todo Item to database
router.post('/signup', async(req,res)=>
{
	console.log(req.body)
    const { fullName,gender,birthdate,email,phoneNumber, password: plainTextPassword } = req.body

	if (!email || typeof email !== 'string') {
		return res.json({ status: 'error', error: 'Invalid email' })
	}

	if (!plainTextPassword || typeof plainTextPassword !== 'string') {
		return res.json({ status: 'error', error: 'Invalid password' })
	}

	if (plainTextPassword.length < 5) {
		return res.json({
			status: 'error',
			error: 'Password too small. Should be atleast 6 characters'
		})
	}

	const password = await bcrypt.hash(plainTextPassword, 10)

	try {
		const response = await signUpTemplate.create(
            {
                fullName,
                gender,
                birthdate,
                email,
                phoneNumber,
                password
            }
            )
            console.log('User created successfully  : ',response)
	} catch (error) {
		if (error.code === 11000) {
			// duplicate key
			return res.json({ status: 'error', error: 'Email  already in use' })
		}
		throw error
	}

	res.json({ status: 'is done' })
})

router.post('/signin', async(req,res)=>
{
	const { email, password } = req.body
	console.log(req.body,'request header')
	const user = await signUpTemplate.findOne({ email }).lean()
	
	if (!user) {
		//console.log('false from routing')
		return res.json({ status: 'error', error: 'Invalid email/password' })
	}

	if (await bcrypt.compare(password, user.password)) {
		// the email, password combination is successful
		const token = jwt.sign(
			{
				id: user._id,
				email: user.email
			},
			JWT_SECRET
			)
			
			return res.json({ status: 'ok', data: token })
		}
		

	res.json({ status: 'error', error: 'Invalid email/password' })
})
router.get('/Signin', (request,response)=>{})
module.exports = router

//test