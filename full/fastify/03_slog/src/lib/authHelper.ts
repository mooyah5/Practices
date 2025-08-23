import bcrypt from 'bcrypt';
import prisma from '../lib/db';
import { ERROR_MESSAGE, ROUND } from './constants';

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

        if (userCount > 0) throw ERROR_MESSAGE.alreadySignup;

        return true;
    } catch (error) {
        throw error;
    }
};

export { generateHash, duplicateVerifyUser };
