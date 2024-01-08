import express from 'express';
import cors from "cors";
import imgUploadRouter from "./router/imgUploadRouter.js";

const PORT = 8000;
const server = express();

server.use(express.json());
server.use(express.urlencoded());
server.use(cors());

server.use("/imgupload", imgUploadRouter)
server.use("/imgupload",express.static("imgUpload"));

server.listen(PORT, () => {
  console.log(`server ---> ${PORT}`);
})