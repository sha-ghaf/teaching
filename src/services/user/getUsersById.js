import Users from './../../helper/db/userDB.js'
import { okResponse } from "./../../helper/function/ResponseHandler.js";
import { badRequestResponse } from "./../../helper/function/ResponseHandler.js";
export function getUserId(req, res, next) {
    try {
        const { id } = req.params;
        const userIndex = Users.findIndex((user) => user.id === parseInt(id));
        if (userIndex === -1) {
            return badRequestResponse(res, "No user with this id");
        }
        return okResponse(res, "User fetched successfully", Users[userIndex]);
    } catch (err) {
        next(err);
    }
}