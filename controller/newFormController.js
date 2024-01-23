

import * as newFormRepository from "../repository/newFormRepository.js";


export async function checkUrl(req, res) {
  let { url } = req.params
  const result = await newFormRepository.checkUrl(url);
  res.json(result)
}
export async function newForm(req, res) {
  let { title, url } = req.body[0]
    // console.log(req.body);
  const result = await newFormRepository.newForm(title, url);
  let num = result
  try {
    for (let v of req.body[1]) {
      let { category, content } = v;
      let success = await newFormRepository.detailForm(category, content, num);
    };
  } catch (error) {
    console.error(error);
  }
  res.json('success')

}