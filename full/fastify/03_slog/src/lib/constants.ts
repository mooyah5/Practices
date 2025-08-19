import { Secret } from 'jsonwebtoken';

const FIRST_PWD = process.env.FIRST_PWD;
const ROUND = Number(process.env.HASH_ROUND);
const SECRET_KEY = process.env.SECRET_KEY as Secret;
const ACCESS_TOKEN_EXPIRE = process.env.ACCESS_TOKEN_EXPIRE;
const REFRESH_TOKEN_EXPIRE = process.env.REFRESH_TOKEN_EXPIRE;

const ERROR_MESSAGE = {
    badRequest: {
        success: false,
        status: 400,
        message: 'Bad request',
    },
    likeAddError: {
        success: false,
        status: 400,
        message: 'already Add like',
    },
    likeCancelError: {
        success: false,
        status: 400,
        message: 'No Like',
    },
    unauthorized: {
        success: false,
        status: 401,
        message: 'Unauthorized',
    },
    invalidToken: {
        success: false,
        status: 401,
        message: 'Invalid token',
    },
    notExpired: {
        success: false,
        status: 400,
        message: 'Token not expired',
    },
    forbidden: {
        success: false,
        status: 403,
        message: 'Forbidden',
    },
    alreadySignup: {
        success: false,
        status: 400,
        message: 'User already signed up',
    },
    notFound: {
        success: false,
        status: 404,
        message: 'Not found',
    },
    preconditionFailed: {
        success: false,
        status: 412,
        message: 'Precondition failed',
    },
    serverError: {
        success: false,
        status: 500,
        message: 'Internal server error',
    },
} as const; // readonly

const SUCCESS_MESSAGE = {
    loginOk: {
        success: true,
        status: 200,
        message: 'Login successful',
    },
    logoutOk: {
        success: true,
        status: 200,
        message: 'Logout successful',
    },
    refreshTokenOk: {
        success: true,
        status: 200,
        message: 'Refresh token successful',
    },
    accessToken: {
        success: true,
        status: 200,
        message: 'Access token successful',
    },
    registerOk: {
        success: true,
        status: 200,
        message: 'Registration successful',
    },
} as const;

type ErrorType = {
    success: boolean;
    status: number;
    message: string;
};
export {
    ERROR_MESSAGE,
    SUCCESS_MESSAGE,
    FIRST_PWD,
    ROUND,
    SECRET_KEY,
    ACCESS_TOKEN_EXPIRE,
    REFRESH_TOKEN_EXPIRE,
};
export type { ErrorType };
