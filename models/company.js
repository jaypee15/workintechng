const mongoose = require("mongoose");

const CompanySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please providd a company name"],
  },
  email: {
    type: String,
  },
  website: {
    type: String,
  },
  industry: {
    type: String,
    required: [true, "Please provide an industry"],
  },
  description: {
    type: String,
    required: [true, "Please provide company description"],
  },
  address: {
    type: String,
    required: [true, "Please provide company address"],
  },
  location: {
    type: String,
    required: [true, "Please provide company location"],
  },
  techStack: {
    type: String,
    required: [true, "Please provide a tech stack"],
  },
  benefits: {
    type: String,
    required: [true, "Please provide company benefits"],
  },
  jobs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Job",
    },
  ],
});

module.exports = mongoose.model("Company", CompanySchema);
