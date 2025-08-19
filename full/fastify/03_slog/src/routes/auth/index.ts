import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import { registerSchema } from '../../schema';
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
            console.log(email, pwd);

            try {
                await authService().register(email, pwd);
                rep.status(SUCCESS_MESSAGE.registerOk.status).send(SUCCESS_MESSAGE.registerOk);
            } catch (error) {
                handleError(rep, ERROR_MESSAGE.badRequest, error);
            }
        },
    );
};
export default authRoute;
