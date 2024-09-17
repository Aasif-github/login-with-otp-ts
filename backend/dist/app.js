"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const otp_routes_1 = __importDefault(require("./routes/otp.routes"));
const app = (0, express_1.default)();
// Define routes, middleware, etc.
app.use(express_1.default.json());
// Middleware, routes, etc.
app.get('/', (req, res) => {
    res.send('Hello, world!');
});
// 
app.use('/v1/', otp_routes_1.default);
exports.default = app;
