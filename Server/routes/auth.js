const express = require("express");
// simply use router to handle all the routes
const router = express.Router();
// import controllers
const {
  TraningData,
  ConsultingDataa,
  getAllConsultancyData,
  deleteConsultingData,
  loginData,
  getConsultancyDataById,
  allAdmins,
  deleteAdminById,
  deletetranningData,
  getalltranningData,
  gettrannigDatabyId,
  createInternship,
  getAllInternShipData,
  deleteeInternshipDataById,
  getinternshipDatabyId,
} = require("../controllers/auth");
// this routes will handle all the data coming from the client side this is post route
router.post("/tranning", TraningData);
router.get("/gettranningdataId", gettrannigDatabyId);
router.get("/tranningdata", getalltranningData);
router.post("/deletetranningdata", deletetranningData);
router.post("/consulting", ConsultingDataa);
router.get("/getconsultingdata", getAllConsultancyData);
router.get("/getconsultingdataId", getConsultancyDataById);
router.post("/deleteitem", deleteConsultingData);
router.post("/login", loginData);
router.get("/alladmins", allAdmins);
router.post("/deleteadmin", deleteAdminById);
// for the internship routes
router.post("/createInternship", createInternship);
router.get("/allinternships", getAllInternShipData);
router.post("/deleteinternship", deleteeInternshipDataById);
router.get("/getinternshipbyid", getinternshipDatabyId);

module.exports = router;
