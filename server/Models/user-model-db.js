export const SIGNUP_FETCH_QUERY= "select * from users where username = ? and email = ?"
export const SIGNUP_INSERT_QUERY="insert into users (username, email, password) values (?,?,?)"
export const LOGIN_FETCH_QUERY="select * from users where email = ?"
