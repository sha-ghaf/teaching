import Users from './../../helper/db/userDB.js'
import { okResponse } from "./../../helper/function/ResponseHandler.js";
export function getUsers(req, res, next) {
    try {
        return okResponse(res, "Users fetched successfully", Users);
    } catch (err) {
        next(err);
    }
}