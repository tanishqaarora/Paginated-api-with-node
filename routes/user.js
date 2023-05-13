const express = require('express');
const User = require('../models/user');
const router = express.Router();

// create user account
router.post('/user', async (req, res) => {
    try {
        const user = await new User({
            email: req.body.email
        })
        // saving user to the db
        const userAccount = await user.save();
        res.status(200).send(userAccount);
    }
    catch(error) {
        console.log(error);
        res.send(error);
    }
    
})

// Paginated api
// getting users page by page
router.get('/getUsers', async (req, res) => {
    try {
        
        let page = parseInt(req.query.page);          // converting string to number
        let limit = parseInt(req.query.limit);

        if(!req.query.page || req.query.page === 0) {
            page = 1;
        }

        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
        const filteredUsers = await User.find({}).limit(limit).skip(startIndex).exec();

        res.json({
            page,
            limit,
            total: filteredUsers.length,
            users: filteredUsers
            
        })
    }
    catch(error) {
        console.log(error);
        res.send(error);
    } 
})

module.exports = router;