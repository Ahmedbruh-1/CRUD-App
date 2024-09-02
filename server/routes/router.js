const express = require("express");
const router = express.Router();
const users = require("../models/userschema");
const bcrypt = require('bcrypt')


// Register user
router.post('/Register', async (req, res) => {
    console.log(req.body);
    const { userid, username, password, fathername, number, age, personalMail, companyMail, job, joiningdate, Salary, status, address, Transcript, PreviousExperience, Certificates, AccountDetails } = req.body;


    try {
        //user.find kay andar {email} pass karraha tha tu
        const preuser = await users.findOne({ personalMail });

        if (preuser) {
            return res.status(404).json("This user is already exist");
        }

        const hashedPassword = await bcrypt.hash(password, 10);


        const adduser = new users({
            userid, username, password: hashedPassword, fathername, number, age, personalMail, companyMail, job, joiningdate, Salary, status, address, Transcript, PreviousExperience, Certificates, AccountDetails
        });

        await adduser.save();

        res.status(201).send({
            statusCode: 201,
            status: true,
            message: "user has been registered",
            payload: {
                adduser
            }
        })


    } catch (error) {
        console.log(error)
        res.status(422).json(error)
    }
})


router.get("/getdata", async (req, res) => {
    try {
        const userdata = await users.find();
        console.log(userdata)

        res.status(201).json(userdata);
    } catch (error) {
        res.status(422).json(error)
    }
})

// get individual user

//yaha slash nhi laga tha route say pehly --->
//aur paramas may id dety hein tab he params sy id lay pao gay :id
router.get("/getuser/:id", async (req, res) => {

    try {
        const { id } = req.params;

        console.log(req.params.id);
        const userindividual = await users.findById(id);
        console.log(userindividual);

        res.status(200).json(userindividual) //yaha tuny response he nhi bea hua tha

    } catch (error) {
        res.status(422).json(error)
    }
});
//get all the users
router.get("/getuserdata", async (req, res) => {

    try {
        const allUsers = await users.find();

        console.log();
        const userindividual = await users.findById(id);
        res.status(200).json(allUsers);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch users", error: error.message });
    }
});
// delete user
router.delete("/delete/:id", async (req, res) => {

    try {

        console.log("1")
        const { id } = req.params;

        if (!id) {
            return res.status(404).json("user does not exist in parameters");
        }
        console.log("2")

        const user = await users.findById(id)
        if (!user) {
            return res.status(404).json("user does not exist");
        }
        console.log("3")


        await users.deleteOne({ _id: id });

        res.status(200).json({
            message: "user has been deleted"
        }) //yaha tuny response he nhi bea hua tha

    } catch (error) {
        res.status(422).json(error)
    }
});

//edit user
router.put('/updateuser/:id', async (req, res) => {
    try {
        const id = req.params.id; // Get the id from the request parameters
        const userData = req.body; // Get the new user data from the request body
        
        // Log id and userData for debugging
        console.log('Updating user with ID:', id);
        console.log('New user data:', userData);

        // Perform the update operation
        const updatedUser = await users.findByIdAndUpdate(id, userData, {
            new: true // Return the updated document
        });

        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({ message: 'User updated successfully', user: updatedUser });
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({ message: 'Error updating user', error });
    }
});


module.exports = router;