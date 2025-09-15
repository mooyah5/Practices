import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import { loginSchema, registerSchema } from '../../schema';
import { TAuthBody } from '../../schema/types';
import { handleError } from '../../lib/errorHelper';
import { ERROR_MESSAGE, SUCCESS_MESSAGE } from '../../lib/constants';
import authService from '../../services/authService';

const authRoute = async (fastify: FastifyInstance) => {
    fastify.post(
        '/register',
        { schema: registerSchema },
        async (req: FastifyRequest<{ Body: TAuthBody }>, rep: FastifyReply) => {
            const { email, pwd } = req.body;

            try {
                await authService().register(email, pwd);
                rep.status(SUCCESS_MESSAGE.registerOk.status).send(SUCCESS_MESSAGE.registerOk);
            } catch (error) {
                handleError(rep, ERROR_MESSAGE.badRequest, error);
            }
        },
    );
    fastify.post(
        '/login',
        { schema: loginSchema },
        async (req: FastifyRequest<{ Body: TAuthBody }>, rep: FastifyReply) => {
            const { email, pwd } = req.body;

            console.log('### login api called', email, pwd);
            try {
                const values = await authService().loginWithPassword(email, pwd);

                rep.setCookie('refresh_token', values.refreshToken, {
                    domain: 'localhost',
                    sameSite: 'none',
                    secure: true,
                    path: '/',
                    httpOnly: true,
                    expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
                });

                const result = {
                    id: values.id,
                    email: values.email,
                    Authorization: values.accessToken,
                };

                rep.status(201).send(result);
            } catch (error) {
                handleError(rep, ERROR_MESSAGE.badRequest, error);
            }
        },
    );
};

export default authRoute;
