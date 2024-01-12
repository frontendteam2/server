import express from 'express';
import cors from "cors";
import imgUploadRouter from "./router/imgUploadRouter.js";
import reviewRouter from "./router/reviewRouter.js";
import path from 'path';
import newFormRouter from "./router/newFormRouter.js";

const PORT = 8000;
const server = express();

server.use(express.json());
server.use(express.urlencoded());
server.use(cors());


server.use("/imgupload", imgUploadRouter)
server.use("/review",reviewRouter)
server.use("/newForm", newFormRouter)
server.use("/imgupload",express.static("imgUpload"));


server.listen(PORT, () => {
  console.log(`server ---> ${PORT}`);
})