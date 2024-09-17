import OtpModel from "../models/otp.model";
import otpGenerator from "otp-generator";

import { ReturnResponse } from "../utils/interfaces";

import { Request, Response, NextFunction } from "express";

const generateOtp = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        let resp: ReturnResponse;
        let { phone_number } = req.body;
        let otp = otpGenerator.generate(6, { upperCaseAlphabets: false, lowerCaseAlphabets:false,specialChars: false });
        let phoneNumber_ = { phone_number };

        // Route to set a cookie    
        res.cookie('phoneNumber_', phoneNumber_, {
            maxAge: 24 * 60 * 60 * 1000, // Cookie expires in 1 day
            httpOnly: true,              // Helps prevent XSS attacks
            secure: false,               // Set to true if using HTTPS
            // sameSite: 'Strict',          // Controls whether cookies are sent with cross-site requests            
        });

       console.log('cookie set');

        // Save the OTP to the database
        await OtpModel.create({ phone_number, otp });   
        
        // Structure the response
         resp = {
            status: "success",
            message: "OTP sent successfully. Please verify your account.",
            data: { phone_number, otp } // Include OTP in the response if needed
        };

        // Send the response with status 200
        res.status(200).send(resp);
    } catch (err) {
        console.error(err);
        next(err); // Pass error to the next middleware (error handler)
    }
};

const verifyOtp = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    
    try {
        let resp: ReturnResponse;

        const { otp } = req.body;

        // Fetch the signed cookie
        const phoneNumber = req.cookies.phoneNumber_;

        if (!phoneNumber) {
            return res.status(400).json({ message: 'Phone number not found in cookies or expired' });
        }

        // Retrieve and verify the OTP from the database (omitted for brevity)
        const isValid = OtpModel.find({ phone_number: phoneNumber, otp });
        
        if (!isValid) {
            return res.status(400).json({ message: 'Invalid OTP' });
        }

        resp = {
            status: "success",
            message: "OTP verified successfully",
            data: { phone_number: phoneNumber }
        };
        res.status(200).send(resp);
    }catch(err){
        console.error(err);
        next(err);
    }
}

export { generateOtp, verifyOtp };