const express = require("express");
const cors = require("cors");
const { check, validationResult } = require("express-validator");
const { v4: uuidv4 } = require("uuid");
const connectDB = require("./db/db");
const Mdw = require("./models/Mdw");
const Volunteer = require("./models/Volunteer");
const Languages = require("./models/Languages");
const footerLanguages = require("./models/languages/common/footerLanguages");
const navbarLanguages = require("./models/languages/common/NavbarLanguages");
const courseLanguages = require("./models/languages/pages/coursesLanguages");
const homepageLanguages = require("./models/languages/pages/homepageLanguages");
const studentStoriesLanguages = require("./models/languages/pages/StudentStoriesLanguages");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
connectDB();

//////////////////////
//Push courseLanguage into db
/////////////////////
app.get("/api/seedlanguages", async (req, res) => {
  await Languages.deleteMany();

  await Languages.create(
    [footerLanguages, navbarLanguages, courseLanguages, homepageLanguages, studentStoriesLanguages],
    (err, data) => {
      if (err) {
        console.error(err.message);
        res.status(400).json({ status: "error", message: "seeding error" });
      } else {
        res.json({ status: "ok", message: "seeding successful" });
      }
    }
  );
});
///////////////////////////
//Fetch courseLanguage from db
///////////////////////////
app.get("/api/languages/:id", async (req, res) => {
  const results = await Languages.findById(req.params.id);
  res.json(results);
});

///////////////////////////
//Push mdw data into db
///////////////////////
app.post(
  "/api/mdw",
  [
    check("name", "name is required").not().isEmpty(),
    check("mobileNumber", "mobile number is required").not().isEmpty(),
    check("workPermitLastThreeDigits", "work permit last 3 digits must be 3 numbers only").isLength(
      { min: 3, max: 3 }
    ),
    check("selectADate", "select a date is required").not().isEmpty(),
    check("studentDescription", "student description is required").isLength({
      max: 200,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const createdMdw = new Mdw({
      name: req.body.name,
      mobileNumber: req.body.mobileNumber,
      workPermitLastThreeDigits: req.body.workPermitLastThreeDigits,
      selectADate: req.body.selectADate,
      studentDescription: req.body.studentDescription,
    });

    await createdMdw.save();

    res.json({ status: "success", message: "information saved" });
  }
);

//////////////////////////
//Push volunteer data into db
/////////////////////////
app.post(
  "/api/volunteer",
  [
    check("name", "name is required").not().isEmpty(),
    check("languagesSpoken", "languagesSpoken is required").not().isEmpty(),
    check("mobileNumber", "mobileNumber is required").not().isEmpty(),
    check("email", "email is required").not().isEmpty(),
    check("availableStartDate", "availableStartDate is required").not().isEmpty(),
    check("availableEndDate", "availableEndDate is required").not().isEmpty(),
    check("volunteerDescription", "volunteerDescription is required").isLength({
      max: 500,
    }),
    check("referralChannel", "referralChannel is required").isLength({
      max: 500,
    }),
    check("attendedOrientation", "attendedOrientation is required").not().isEmpty(),
    check("privacyPolicyAgreement", "privacyPolicyAgreement is required").not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const createdVolunteer = new Volunteer({
      name: req.body.name,
      languagesSpoken: req.body.languagesSpoken,
      mobileNumber: req.body.mobileNumber,
      email: req.body.email,
      availableStartDate: req.body.availableStartDate,
      availableEndDate: req.body.availableEndDate,
      volunteerDescription: req.body.volunteerDescription,
      referralChannel: req.body.referralChannel,
      questionsOrNotes: req.body.questionsOrNotes,
      attendedOrientation: req.body.attendedOrientation,
      privacyPolicyAgreement: req.body.privacyPolicyAgreement,
    });

    await createdVolunteer.save();

    res.json({ status: "success", message: "information saved" });
  }
);

app.listen(5001);
