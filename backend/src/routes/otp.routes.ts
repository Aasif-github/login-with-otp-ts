import { Router } from "express";

import { generateOtp } from "../controllers/otp.controller";

const optRouter = Router();

optRouter.post('/send-otp', generateOtp);

export default optRouter;
