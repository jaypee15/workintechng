const express = require("express");

const {
    createCompany,
    getAllCompanies,
    getCompanyById,
    updateCompanyById,
    deleteCompanyById,
    companyHireForm,
    newCompany
} = require("../controllers/company");

const router = express.Router();

router.route("/companies").post(createCompany).get(getAllCompanies);
router.get("/new-company", newCompany)
router.route("/hire/company-form").get(companyHireForm);
router.route("/:companyID").get(getCompanyById).patch(updateCompanyById).delete(deleteCompanyById);


module.exports = router;