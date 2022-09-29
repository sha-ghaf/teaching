import Users from './../../helper/db/userDB.js'
import lectures from './../../helper/db/lecturesDB.js'
import { okResponse } from "./../../helper/function/ResponseHandler.js";
import { badRequestResponse } from "./../../helper/function/ResponseHandler.js";
export function register(req, res, next) {
    try {
        const { studentId, lectureId } = req.body
        const lecturesIndex = lectures.some((lec) => lec.id === parseInt(lectureId));
        console.log(lectureId)
        console.log(lectures.some((lec) => lec.id === parseInt(1)))
        if (lecturesIndex === false) {
            return badRequestResponse(res, "No lecture with this id");
        }
        const userIndex = Users.some((user) => user.id === parseInt(studentId));
        if (userIndex === false) {
            return badRequestResponse(res, "No User with this id");
        }
        const ro = Users[parseInt(studentId) - 1]
        console.log(ro.role);
        if ((ro.role !== "Student")){
            return badRequestResponse(res, "User not student");
        }
        return okResponse(res, "welcome , you can see the lectures");
    } catch (err) {
        next(err);
    }
}
