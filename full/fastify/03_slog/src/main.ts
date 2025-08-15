import Fastify from 'fastify';

const fastify = Fastify();

// req: 요청에 대한 정보가 담긴 매개변수
// res: 응답에 대한 정보가 담긴 매개변수
fastify.get('/ping', async (req, res) => {
    return 'pong\n';
});

const start = async () => {
    try {
        await fastify.listen({ port: 8083 });
        console.log('Server Started');
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};

start();

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
