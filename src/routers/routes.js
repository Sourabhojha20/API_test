const express = require('express')
const router = express.Router()
const UserModel = require('../modals/User')
const Bit_Details = require('../modals/Bit_details')
const app = express()

router.post('/signup', async (req, res) => {
    try {
      const { name, email, password } = req.body;
      const user = new UserModel({ name, email, password });
      await user.save();
      res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Signup failed', error: error.message });
    }
  });

// Login Endpoint
router.post('/login', async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await UserModel.findOne({ email });
  
      if (!user || user.password !== password) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
  
      res.status(200).json({ message: 'Login successful' });
    } catch (error) {
      res.status(500).json({ message: 'Login failed', error: error.message });
    }
  });

   router.post('/spinner_app_data',async(req,res)=>{
    try {
        const { userId, bit, coin } = req.body;
    
        // Create a new user instance
        const newUser = new Bit_Details({ userId, bit, coin });
    
        // Save the user to the database
        await newUser.save();
    
        res.status(201).json({ message: 'User created successfully', user: newUser });
      } catch (error) {
        res.status(500).json({ message: 'Failed to create user', error: error.message });
      }
   })
module.exports = router;