const express = require('express');
const routes = express.Router();
const applicationModel = require('../models/application');
const mongoose = require('mongoose');

// Get All Requests
routes.get("/applications", async (req, res) => {
    try {
        const applicationList = await applicationModel.find();
        res.status(200).json(applicationList);
    } catch (error) {
        console.error("Error retrieving applications:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// Add NEW Application
routes.post("/applications", async (req, res) => {
    try {
        const newApplication = new applicationModel(req.body);
        const savedApplication = await newApplication.save();
        res.status(201).json(savedApplication);
    } catch (error) {
        console.error("Error adding application:", error);
        res.status(500).json({ status: false, message: "Internal Server Error" });
    }
});

// Get Application By Id
routes.get("/applications/:aid", async (req, res) => {
    try {
        const applicationId = req.params.aid;
        const application = await requestModel.findById(applicationId);
        if (!application) {
            return res.status(404).json({ status: false, message: 'Application not found' });
        }
        res.status(200).json({ status: true, data: tenant });
    } catch (error) {
        res.status(500).json({ status: false, message: "Internal Server Error" });
    }
});

module.exports = routes;