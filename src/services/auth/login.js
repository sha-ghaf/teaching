import bcrypt from 'bcrypt';
import Users from './../../helper/db/userDB.js'
import { okResponse } from "./../../helper/function/ResponseHandler.js";
import { badRequestResponse } from "./../../helper/function/ResponseHandler.js";
// console.log(Users)
export function login(req, res, next) {
	try{
		const { email, password } = req.body;
		const user = Users.find((u) => u.email === email);
		console.log(user);
		if (!user) {
			return badRequestResponse(res, 'Invalid email or password');
		}
		const isValid = bcrypt.compareSync(password, user.password);
		if (!isValid) {
			return badRequestResponse(res, 'Invalid password');
		}
		return okResponse(res, "login successfully", user);
	} catch (err) {
        next(err);
    }
}