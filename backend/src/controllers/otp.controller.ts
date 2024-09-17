import OtpModel from "../models/otp.model";

import { Request, Response, NextFunction } from "express";

const generateOtp = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        // Generate a random OTP (assuming 6-digit OTP)
        const otp = Math.floor(100000 + Math.random() * 900000); // Generates a 6-digit OTP
        
        // Structure the response
        const resp = {
            status: "success",
            message: "OTP sent successfully. Please verify your account.",
            data: { otp } // Include OTP in the response if needed
        };

        // Send the response with status 200
        res.status(200).send(resp);
    } catch (err) {
        console.error(err);
        next(err); // Pass error to the next middleware (error handler)
    }
};

export { generateOtp }