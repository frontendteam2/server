import { db } from "../db/database.js";

export async function checkUrl(url) {
  const sql = 'select count(url) as cnt from form where url = ?'
  return db
    .execute(sql, [url])
    .then((rows) => rows[0][0])

}
export async function newForm(title, url) {

  const sql = `
  INSERT INTO form (title, url, date, writer, end_date)
  VALUES (?, ?, NOW(), 'user', '2030-01-15') ;
`;

  return db.execute(sql, [title, url])
    .then((rows) => rows[0].insertId)
}

export async function detailForm(category, content, num) {
  const sql = `insert into form_detail(category , content , num) values(?,?,?);`
  return db
    .execute(sql, [category, content, num])
    .then((result) => 'success')
}
