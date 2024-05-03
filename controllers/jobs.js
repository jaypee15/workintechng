const asyncHandler = require("express-async-handler");
const Job = require("../models/jobs");

// Create a Job
const createJob = asyncHandler(async (req, res) => {
  const job = await Job.create(req.body);
  // res.render("../views/partials/hire", { Job });
  res.status(201).json(job);
});



// Get all jobs
const getAlljobs = asyncHandler(async (req, res) => {
  // const jobs = await Job.find();
  // res.render("alljobs", { jobs });
  console.log("all jobs")
});

// Get a Job by ID
const getJobById = asyncHandler(async (req, res) => {
  // const Job = await Job.findById(req.params.JobId);
  // if (!Job) {
  //   res.status(404);
  //   throw new Error("Job not found");
  // }
  // res.render("JobDetails", { Job });
});

// Update a Job by ID
const updateJobById = asyncHandler(async (req, res) => {
  // const Job = await Job.findByIdAndUpdate(
  //   req.params.JobId,
  //   req.body,
  //   {
  //     new: true,
  //     runValidators: true,
  //   }
  // );
  // if (!Job) {
  //   res.status(404);
  //   throw new Error("Job not found");
  // }
  // res.render("JobUpdated", { Job });
});

// Delete a Job by ID
const deleteJobById = asyncHandler(async (req, res) => {
  // const Job = await Job.findByIdAndDelete(req.params.JobId);
  // if (!Job) {
  //   res.status(404);
  //   throw new Error("Job not found");
  // }
  // res.render("JobDeleted");
});

module.exports = {
  createJob,
  getAlljobs,
  getJobById,
  updateJobById,
  deleteJobById
};
