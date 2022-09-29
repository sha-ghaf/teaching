import lectures from './../../helper/db/lecturesDB.js'
import { okResponse } from "./../../helper/function/ResponseHandler.js";
import { badRequestResponse } from "./../../helper/function/ResponseHandler.js";
export function getLecturesId(req, res, next) {
    try {
        const { id } = req.params;
        const lecturesIndex = lectures.findIndex((lec) => lec.id === parseInt(id));
        if (lecturesIndex === -1) {
            return badRequestResponse(res, "No lecture with this id");
        }
        return okResponse(res, "lecture fetched successfully", lectures[lecturesIndex]);
    } catch (err) {
        next(err);
    }
}