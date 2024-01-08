

import * as newFormRepository from "../repository/newFormRepository.js";


export async function checkUrl(req, res) {
  let { url } = req.params
  const result = await newFormRepository.checkUrl(url);
  res.json(result)
}
export async function newForm(req, res) {
  let {title,url } = req.body[0]
  // const result = await newFormRepository.newForm(title,url);
  // console.log(result);
  console.log(req.body[1]); 
}