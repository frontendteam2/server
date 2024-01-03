import express from 'express';
import multer from 'multer';
import * as imgUploadRepository from "../repository/imgUploadRepository.js";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'imgUploads/');
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `${Date.now()}${ext}`);
  }
});
const upload = multer({ storage: storage }).array('images');

export function imgUpload(req, res){
  
  const result = imgUploadRepository.imgUpload();
  res.json(result)
}