import bcrypt from 'bcrypt';
import Users from './../../helper/db/userDB.js'
import { okResponse } from "./../../helper/function/ResponseHandler.js";
import { badRequestResponse } from "./../../helper/function/ResponseHandler.js";
export function register(req, res, next) {
    try {
        const { name, role, email, phoneNumber, password } = req.body
        const rol = ["student", "teacher", "Student", "Teacher"]
        if (rol.includes((ro) => ro === role)){
            return badRequestResponse(res, " role not correct");
        }
        if (Users.some((user) => user.email === email)) {
            return badRequestResponse(res, "Email already exists");
        }
        const encryptedPassword = bcrypt.hashSync(password, 10);
        const user = {
            id: Users.length + 1,
            name,
            role,
            email,
            phoneNumber,
            password: encryptedPassword,
        };
        Users.push(user);
        return okResponse(res, "Add User successfully", Users);
    } catch (err) {
        next(err);
    }
}