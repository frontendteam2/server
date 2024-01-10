import { db } from '../db/database.js'


export async function viewGetAll(url){
  const sql = `
    select 
      *
    from 
      form f, form_detail fd 
    where 
      f.fid = fd.num
    and
      f.url = ?
  `

  return db
    .execute(sql,[url])
    .then((result)=>result[0])
}