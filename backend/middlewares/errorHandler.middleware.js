import HTTPSTATUS from "../constants/http.constant.js";
import { AppError } from "../utils/appError.util.js";
import { ZodError } from "zod";
import ErrorCodes from "../constants/errorCodes.constant.js";

const errorHandler = async (error, req, res, next) => {
    if(error instanceof SyntaxError && error.status === 400 && "body" in error) {
        return res.status(HTTPSTATUS.BAD_REQUEST).json({
            success: false,
            message: "Invalid JSON format. Please check your request payload."
        })
    }

    if(error instanceof ZodError) {
        return res.status(HTTPSTATUS.BAD_REQUEST).json({
            success: false,
            message: "Validation Failed",
            errors: error.errors.map(err => ({
                field: err.path.join("."),
                message: err.message
            })),
            errorCode: ErrorCodes.VALIDATION_ERROR
        })
    }

    if(error instanceof AppError) {
        return res.status(error.statusCode).json({
            success: false,
            message: error.message,
            errorCode: error.errorCode
        })
    }
    
    console.error("Unknown error caught: ", error)
    return res.status(HTTPSTATUS.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: "Internal Server Error: An unexpected error occurred.",
        error: error?.message || "Unknown error"
    })
}

export default errorHandler