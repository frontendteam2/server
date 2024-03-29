import * as repository from "../repository/viewRepository.js"

export async function viewGetAll(req,res){
  const {url} = req.params;
  const result = await repository.viewGetAll(url);
  res.json(result);
}