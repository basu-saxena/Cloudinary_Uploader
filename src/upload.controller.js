const { uploadImage } = require("./cloudinary");
const uploadFile = async (req, res) => {
  try {
    const file = req.file;
    const result = await uploadImage(file.buffer);
    return res.status(201).json({
      message: "Uploaded",
      url: result.url,
      publicId: result.publicId,
    });
  } catch (err) {
    console.log(err);
    return res.status(500);
  }
};

module.exports = { uploadFile };
