import express from 'express';
import cors from "cors";
import imgUploadRouter from "./router/imgUploadRouter.js";

const PORT = 8000;
const server = express();

server.use(cors()).use(express.json()).use(express.urlencoded());

server.use("/imgupload", imgUploadRouter)

server.use('/imgupload',express.static(path.join('imgUploads')))

server.listen(PORT, () => {
  console.log(`server ---> ${PORT}`);
})