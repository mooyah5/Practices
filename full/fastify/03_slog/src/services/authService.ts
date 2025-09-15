import db from '../lib/db';
import {
    generateHash,
    duplicateVerifyUser,
    verifyPassword,
    generateAccessToken,
    generateRefreshToken,
} from '../lib/authHelper';
import { ERROR_MESSAGE } from '../lib/constants';

function authService() {
    const register = async (email: string, pwd: string) => {
        console.log('##', email, pwd);
        console.log('____________________');
        try {
            await duplicateVerifyUser(email);
            console.log('@@@@', email, pwd);

            const hashPwd = generateHash(pwd);

            const values = {
                email,
                password: hashPwd,
            };
            console.log('RETURN: ', values);
            const returnValue = await db.user.create({
                data: values,
            });
            return returnValue;
        } catch (error) {
            throw error;
        }
    };

    const loginWithPassword = async (email: string, pwd: string) => {
        console.log('## LOGIN', email, pwd);
        console.log('____________________');
        try {
            const authenticationUser = await db.user.findUnique({
                where: {
                    email: email,
                },
                select: {
                    id: true,
                    email: true,
                },
            });

            if (!authenticationUser) throw ERROR_MESSAGE.badRequest;

            const passwordVerification = await verifyPassword(email, pwd);
            if (!passwordVerification) throw ERROR_MESSAGE.unauthorized;

            const accessToken = generateAccessToken(authenticationUser);
            const refreshToken = generateRefreshToken(authenticationUser);

            const values = {
                userId: authenticationUser.id,
                refreshToken: refreshToken,
            };

            await db.token.create({
                data: values,
            });

            const returnValue = {
                id: authenticationUser.id,
                email: authenticationUser.email,
                accessToken: accessToken,
                refreshToken: refreshToken,
            };

            return returnValue;
        } catch (error) {
            throw error;
        }
    };

    return {
        register,
        loginWithPassword,
    };
}

export default authService;
