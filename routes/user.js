const express = require('express');
const User = require('../models/user');
const router = express.Router();

// create user account
router.post('/user', async (req, res) => {
    try {
        const user = await new User({
            email: req.body.email
        })
        // saving usr to the db
        const userAccount = await user.save();
        res.status(200).send(userAccount);
    }
    catch(error) {
        console.log(error);
        res.send(error);
    }
    
})

router.get('/getUsers', async (req, res) => {
    try {
        const users = await User.find({})
        // console.log(users.length);
        res.status(200).send(users);
    }
    catch(error) {
        console.log(error);
        res.send(error);
    }
    
})

module.exports = router;