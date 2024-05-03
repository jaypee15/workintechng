const express = require("express");

const {
    createJob,
    getAlljobs,
    getJobById,
    updateJobById,
    deleteJobById
} = require("../controllers/jobs");

const router = express.Router();

router.route("/").post(createJob).get(getAlljobs);
router.route("/:jobID").get(getJobById).patch(updateJobById).delete(deleteJobById);


module.exports = router;