const asyncHandler = require("express-async-handler");
const multer = require("multer");

const Company = require("../models/company");
const uploadImage = require("../utils/cloudinary");

// set up multer
const storage = multer.diskStorage({});
const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(new BadRequestError("Please upload an image file"), false);
  }
};
const upload = multer({
  storage,
  fileFilter: multerFilter,
});

const uploadAvatar = upload.single("photo");

// Create a Company
const createCompany = asyncHandler(async (req, res) => {
  const company = await Company.create(req.body);
  // res.render("../views/partials/hire", { company });
  res.status(201).json(company);
});

const newCompany = asyncHandler(async (req, res) => {
  res.render("pages/create-company", {title: "companies - WorkInTechNG"})
})

const companyHireForm = asyncHandler(async (req, res) => {

 
  res.render("pages/company-hire", {title: "Hire - WorkInTechNG"});
});

// Get all Companies
const getAllCompanies = asyncHandler(async (req, res) => {
  // const companies = await Company.find();
  // res.render("pages/all-companies", { companies });
  res.render("pages/all-companies", { title: "All Companies - WorkInTechNG" });
  
});

// Get a Company by ID
const getCompanyById = asyncHandler(async (req, res) => {
  // const company = await Company.findById(req.params.companyId);
  // if (!company) {
  //   res.status(404);
  //   throw new Error("Company not found");
  // }
  // res.render("companyDetails", { company });
});

// Update a Company by ID
const updateCompanyById = asyncHandler(async (req, res) => {
  // const company = await Company.findByIdAndUpdate(
  //   req.params.companyId,
  //   req.body,
  //   {
  //     new: true,
  //     runValidators: true,
  //   }
  // );
  // if (!company) {
  //   res.status(404);
  //   throw new Error("Company not found");
  // }
  // res.render("companyUpdated", { company });
});

// Delete a Company by ID
const deleteCompanyById = asyncHandler(async (req, res) => {
  // const company = await Company.findByIdAndDelete(req.params.companyId);
  // if (!company) {
  //   res.status(404);
  //   throw new Error("Company not found");
  // }
  // res.render("companyDeleted");
});

module.exports = {
  createCompany,
  getAllCompanies,
  getCompanyById,
  updateCompanyById,
  deleteCompanyById,
  companyHireForm,
  newCompany
};
