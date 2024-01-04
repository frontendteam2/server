import express from 'express';
import cors from "cors";
import imgUploadRouter from "./router/imgUploadRouter.js";
import reviewRouter from "./router/reviewRouter.js";
import path from 'path';

const PORT = 8000;
const server = express();

server.use(cors()).use(express.json()).use(express.urlencoded());

//router

server.use("/imgupload", imgUploadRouter)
server.use("/review",reviewRouter)
//get server file
server.use('/imgupload',express.static(path.join('imgUploads')))

server.listen(PORT, () => {
  console.log(`server ---> ${PORT}`);
})