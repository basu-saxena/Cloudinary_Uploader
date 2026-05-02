const {Router} = require("express")
const { upload } = require("./upload.middleware");
const {analyseResume} = require("./analyse.controller")

const router = Router()

router.post("/", upload.single("resumePdf"), analyseResume);

module.exports = router;