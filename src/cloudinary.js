const cloudinary = require("cloudinary").v2;
const streamifier = require("streamifier");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
  secure: true,
});

const uploadImage = async (fileBuffer) => {
  if (!fileBuffer) {
    throw new Error("No file buffer provided");
  }
  const options = {
    resource_type: "image",
  };

  return await new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(options, (error, res) => {
      if (error || !res) {
        return reject(new Error("Error while uploading image to cloudinary"));
      }

      const url = res.secure_url;
      const publicId = res.public_id;

      if (!url || !publicId) {
        return reject(new Error("Invalid response from cloudinary"));
      }

      resolve({ url, publicId });
    });

    streamifier.createReadStream(fileBuffer).pipe(stream);
  });
};

module.exports = { uploadImage };
