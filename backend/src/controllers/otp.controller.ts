import OtpModel from "../models/otp.model";
import otpGenerator from "otp-generator";

import { ReturnResponse } from "../utils/interfaces";

import { Request, Response, NextFunction } from "express";

const generateOtp = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        let resp: ReturnResponse;
        let { phone_number } = req.body;
        let otp = otpGenerator.generate(6, { upperCaseAlphabets: false, lowerCaseAlphabets:false,specialChars: false });
        // Save the OTP to the database
        await OtpModel.create({ phone_number, otp });   
        
        // Structure the response
         resp = {
            status: "success",
            message: "OTP sent successfully. Please verify your account.",
            data: { phone_number,otp } // Include OTP in the response if needed
        };

        // Send the response with status 200
        res.status(200).send(resp);
    } catch (err) {
        console.error(err);
        next(err); // Pass error to the next middleware (error handler)
    }
};

export { generateOtp }