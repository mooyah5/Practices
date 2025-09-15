import bcrypt from 'bcrypt';
import prisma from '../lib/db';
import {
    ACCESS_TOKEN_EXPIRES,
    ERROR_MESSAGE,
    REFRESH_TOKEN_EXPIRES,
    ROUND,
    SECRET_KEY,
} from './constants';
import jwt from 'jsonwebtoken';
import db from '../lib/db';
const generateHash = (pwd: string) => {
    return bcrypt.hashSync(pwd, ROUND);
};

const duplicateVerifyUser = async (email: string) => {
    try {
        const userCount = await prisma.user.count({
            where: {
                email,
            },
        });

        if (userCount > 0) {
            console.log('유저가 이미 있어요');
            throw ERROR_MESSAGE.alreadySignup;
        }

        return true;
    } catch (error) {
        throw error;
    }
};

const verifyPassword = async (email: string, pwd: string) => {
    try {
        const encrptedPwd = await db.user.findUnique({
            where: {
                email: email,
            },
            select: {
                password: true,
            },
        });

        if (!encrptedPwd) return false;

        const result = bcrypt.compareSync(pwd, encrptedPwd.password);
        return result;
    } catch (error) {
        return false;
    }
};

const generateAccessToken = (user: { id: number; email: string }) => {
    const accessToken = jwt.sign({ id: user.id, email: user.email }, SECRET_KEY, {
        expiresIn: ACCESS_TOKEN_EXPIRES,
    });
    return accessToken;
};

const generateRefreshToken = (user: { id: number; email: string }) => {
    const refreshToken = jwt.sign({ id: user.id, email: user.email }, SECRET_KEY, {
        expiresIn: REFRESH_TOKEN_EXPIRES,
    });
    return refreshToken;
};

export {
    generateHash,
    duplicateVerifyUser,
    verifyPassword,
    generateAccessToken,
    generateRefreshToken,
};
