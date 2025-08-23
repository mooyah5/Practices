import db from '../lib/db';
import { generateHash, duplicateVerifyUser } from '../lib/authHelper';

function authService() {
    const register = async (email: string, pwd: string) => {
        try {
            await duplicateVerifyUser(email);

            const hashPwd = generateHash(pwd);

            const values = {
                email,
                password: hashPwd,
            };
            const returnValue = await db.user.create({
                data: values,
            });
            return returnValue;
        } catch (error) {
            throw error;
        }
    };

    return {
        register,
    };
}

export default authService;
