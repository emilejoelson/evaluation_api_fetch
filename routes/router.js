const express=require('express');
const router=express.Router();
const country=require('../controllers/Controller.js');

router.get("/getAllCountries",country.getAllCountries);
router.get("/getCountryDetails/:countryName",country.getCountryDetails)
router.get("/",country.displayCountries)
module.exports=router;