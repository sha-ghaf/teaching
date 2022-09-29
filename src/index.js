import express from "express";
import UserRouter from './controllers/user.controller.js';
import LecturesRouter from './controllers/lectures.controller.js';
import AuthRouter from './controllers/auth.controllers.js';
import LecRegisterRouter from './controllers/lecRegister.controllers.js';
import logger from './helper/middleWares/logger.js';
import errorHandler from './helper/middleWares/errorHandler.js';
import dotenv from 'dotenv';
dotenv.config();
const app = express();


// -- Middleware --
app.use(express.json());
app.use(logger);

// -- Routes --
app.use('/users', UserRouter);
app.use('/lectures', LecturesRouter);
app.use('/auth', AuthRouter);
app.use('/lecRegister', LecRegisterRouter);

app.use(errorHandler);
const PORT = 3000;
app.listen(PORT, () => {
	console.log('Server is running on port 3000');
	console.log(`http://localhost:${PORT}`);
});

export default app;