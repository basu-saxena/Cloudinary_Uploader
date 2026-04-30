const { Router } = require("express");
const { upload } = require("./upload.middleware");
const { uploadFile } = require("./upload.controller");

const router = Router();
router.post("/", upload.single("profilePicture"), uploadFile);

module.exports = router;
