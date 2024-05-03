const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please provide a Job title"],
      maxlength: [50, "Job title should not be more than 50 characters"],
    },
    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
      required: [true, "Please provide a company name"],
      maxlength: [50, "Company name should not be more than 50 characters"],
    },
    location: {
      type: String,
      required: [true, "Please provide a Job location"],
    },
    description: {
      type: String,
      required: [true, "Please provide a job description"],
    },
    requirements: {
      experience: String,
      qualifications: [String],
      niceToHave: [String],
    },
    responsibilities: {
        type: [String],
        required: [true, "Please provide job responsibilities"],
      },
    techStack: {
        type: [String],
        required: [true, "Please provide techStack"],
      },
    selectionProcess: [String],
    benefits: {
      type: [String],
      required: [true, "Please provide job benefits"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Job", JobSchema);
