import { db } from "../db/database.js";

export async function getReview(url){
  return db
  .execute('select c.total as total,r.phone as phone, r.name name,r.content content,r.date date from form as f, review as r,(select count(*) as total from review,form where form.fid=review.fid and form.url=?) as c where f.fid=r.fid and f.url=? order by date desc',[url,url])
  .then(data=>data[0])
}

export async function postReview(url,phone,name,content){
  return db
  .execute('insert into review(fid,name,content,phone,date) values((select fid from form where url=?),?,?,?,sysdate())',[url,name,content,phone])
  .then(res=>'success').catch(err=>console.log(err))
}