const express = require('express');
const router = express.Router();
const managerModel = require('../models/manager');
const tenantModel = require('../models/tenant');

// Login Route
router.post('/login', async (req, res) => {
    const { email, password, role } = req.body;
    try {
        let user;
        if (role === 'manager') {
            user = await managerModel.findOne({ email, password });
        } else if (role === 'tenant') {
            user = await tenantModel.findOne({ email, password });
        }

        if (!user) {
            return res.status(401).json({ status: false, message: 'Invalid email or password' });
        }

        res.status(200).json({
            status: true,
            message: `${role.charAt(0).toUpperCase() + role.slice(1)} logged in successfully`,
            user: { email: user.email, role }
        });
    } catch (error) {
        res.status(500).json({ status: false, message: "Internal Server Error" });
    }
});

module.exports = router;