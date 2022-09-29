import Joi from 'joi';
import { joiPasswordExtendCore } from 'joi-password';
const joiPassword = Joi.extend(joiPasswordExtendCore);
const lecRegisterSchema = Joi.object({
	studentId: Joi.string().required().messages({
		'string.empty': "studentId can't be empty",
		'any.required': 'studentId is required',
	}),
	lectureId: Joi.string().required().messages({
		'string.empty': "lectureId can't be empty",
		'any.required': 'lectureId is required',
	}),
});

export default lecRegisterSchema;