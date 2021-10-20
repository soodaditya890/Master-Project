import express from "express";
import AWS from "aws-sdk";
import multer from "multer";

import ImageModel from "../../database/image";

//utilities
import { s3Upload } from "../../Utilis/AWS/s3";

const Router = express.Router();

//Multer config
const storage = multer.memoryStorage();
const upload = multer({ storage });

//AWS S3 bucket config





/*
Route         /
Descrip       uploading given image to s3 bucket, and then saving the file to mongodb
Params        None
Access        Public
Method        GET
*/

Router.post("/", upload.single("file"), async (req, res) => {
    try {
        const file = req.file;
        //S3 bucket options
        const bucketOptions = {
            Bucket: "shapeaimasterproject",
            Key: file.originalname,
            Body: file.buffer,
            ContentType: file.mimetype,
            ACL: "public-read"
        };

        

        const uploadImage = await s3Upload(bucketOptions);

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});


export default Router;