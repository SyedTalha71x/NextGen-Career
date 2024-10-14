export const INSERT_PATH="insert into path (path, user_id) values (?,?)"
export const INSERT_STEP = "INSERT INTO steps (name, path_id) VALUES (?, ?)";
export const INSERT_SKILL = "INSERT INTO skills (name, step_id) VALUES (?, ?)";
export const CHECK_USER_PROFILE="SELECT * FROM users WHERE id = ?"
export const UPDATE_USER_PROFILE="UPDATE users SET  language = ?, profile_picture = ?, city = ?, country = ?, position = ?, full_name = ?, date_of_birth = ?, summary = ? WHERE id = ? "
