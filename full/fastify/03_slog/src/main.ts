import Fastify from 'fastify';
import routes from './routes';
import type { FastifyCookieOptions } from '@fastify/cookie';
import fastifyCookie from '@fastify/cookie';
import { SECRET_KEY } from './lib/constants';
import { TypeBoxTypeProvider } from '@fastify/type-provider-typebox';
import dotenv from 'dotenv';
dotenv.config();

const fastify = Fastify({
    logger: true,
}).withTypeProvider<TypeBoxTypeProvider>();

fastify.get('/ping', () => {
    return 'pong';
});
fastify.register(fastifyCookie, {
    secret: SECRET_KEY,
} as FastifyCookieOptions);
fastify.register(routes);

const start = async () => {
    try {
        await fastify.listen({ port: 8083 });
        console.log('-----Server Started-----');
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};

start();
fastify.addHook('onRequest', (req, _rep, done) => {
    req.log.info({ method: req.method, url: req.url, headers: req.headers }, 'incoming');
    done();
});

fastify.setErrorHandler((err, _req, reply) => {
    reply.log.error({ err }, 'error');
    if ((err as any).statusCode) {
        return reply.code((err as any).statusCode).send({ success: false, message: err.message });
    }
    return reply.code(500).send({ success: false, message: 'Internal Error' });
});
// import fp from 'fastify-plugin';    // plugin의 추가기능 사용

// //
// function customPlugin() {
//     // decorate: 해당 플러그인을 사용하게 될 때 필요한 객체들을 등록
//     fastify.decorate('name', null)
// }

// // 작성된 플러그인을 fp로 감싼다.
// export const customPlugn = fp(customPlugin, {
//     name: 'customPluginName'    // 플러그인 이름 따로 등록
// })

// fastify.register(customPlugin)
