import Router from 'express';
import userRoute from './userRoute.js';
const rootRouter = Router();


rootRouter.use('/user',userRoute);

export default rootRouter;