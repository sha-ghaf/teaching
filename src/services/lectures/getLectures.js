import Lectures from './../../helper/db/lecturesDB.js'
import { okResponse } from "./../../helper/function/ResponseHandler.js";
export function getLectures(req, res, next) {
    try {
        return okResponse(res, "Lectures fetched successfully", Lectures);
    } catch (err) {
        next(err);
    }
}