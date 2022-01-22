const express = require('express');
const router = express.Router();
const Images = require('../model/schema')
const multer = require('../multer')
const path = require('path')
const fs = require('fs').promises

/* GET home page. */
router.get('/', async function(req, res, next) {
  const images = await Images.find()
  res.render('index', { images});
});


router.post("/upload", multer.single("image"),  async function (req, res, next) {
  const { path: temporaryName, originalname } = req.file;
  const fileName = path.join(__dirname, "/../public/images/", originalname);
  console.log(fileName)
  try {
    await fs.rename(temporaryName, fileName);
    await Images.create({name: originalname, url: `http://localhost:3000/images/${originalname}`})
  } catch (err) {
    await fs.unlink(temporaryName);
    return next(err);
  }
  res.end("OK")
})

module.exports = router;
