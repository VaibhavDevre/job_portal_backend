import express from 'express';
import jobModel from '../Models/jobModel.js';


const Router = express.Router();

// GET ALL JOBS
Router.get('/jobs', async (req, res) => {
    try {
        const jobs = await jobModel.find({});
        res.status(200).send({
            success: true,
            message: "Jobs fetched successfully",
            jobs
        })
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "error while fetching jobs",
            error
        })
    }

})

// GET JOB BY ID || SPECIFIC JOB

Router.get('/jobs/:id', async (req, res) => {
    try {
        console.log("params :",req.params)
        const job = await jobModel.findById(req.params.id);
        res.status(200).send({
            success: true,
            message: "Job fetched successfully",
            job
        })
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "error while fetching jobs",
            error
        })
    }
})

// POST JOBS

Router.post('/jobs', async (req, res) => {
    try {
        const { title, company, type, location, description } = req.body;
        if (!title || !company || !type || !location || !description) {
            return res.status(400).send({
                success: false,
                message: "Please fill all the fields"
            })
        }
        else {
            const Job = await jobModel.create({ title, company, type, location, description });
            res.status(200).send({
                success: true,
                message: "Job Created Successfully !",
                Job
            })
        }

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "error while adding job",
            error
        })
    }
})

export default Router;