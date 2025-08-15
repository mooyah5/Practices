# fastify 첫걸음

## packages.json

### type: module

-   import/export 기능 사용

### scripts

```
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start:build": "tsc -w --project tsconfig.json && npx -p tsconfig.json",
    "start": "npm run build:live",
    "build:live": "npx tsx src/main.ts"
},
```

`"build:live": "nodemon --watch 'src/' --exec node --loader ts-node/esm src/main.ts --verbose"`

-   scripts.build:live (개발 시 서버를 실행할 명령어)
    -   nodemon: 코드의 변경을 감지하고 재실행
    -   --watch 'src/': src 폴더의 변화를 감지
    -   exec
    -   node --loader: 컴파일러가 바로 ts를 실행하는 ts 로더
    -   ts-node/esm: ts노드의 esm 옵션 설정
    -   src/main.ts: 실행 파일
    -   --verbose: 터미널에 자세한 정보 표시

`"start:build": "tsc -w --project tsconfig.json && npx -p tsconfig.json"`

-   작성 코드가 js로 변환되고 dist 폴더에 생성

`"start": "npm run build:live"`

-   작성한 빌드 라이브 실행

##

```
fastify.route({
    method: "GET",  // 대문자로!
    url: '/',
    schema: {...},
    preHandler: function (req, res) {...},

})
```

## 스키마

```
const articleSchema = {
    schema: {
        headers: {
            type: 'object', // 헤더 타입
            properties: {
                // 헤더 프로퍼티, 타입
                authorization: { type: 'string' },
            },
            required: ['authorization'],    // 필수값 지정
        },
        response: { // 클라이언트에게 전달되는 응탑 형태 정의
            200: {
                type: 'object',
                properties: { hello : {type: string}}
            }

        }
    }
}

fasity.get("/articles", articleSchema, ascyn (request, reply) => {hello: 'world'} )
```

---

##

```
type TBody {
    title: string;
    content: string;
}
fastify.get<{Body: TBody}>("/articles", async (request, reply) => {
    const {title, content} = request.body
})
```

---

##

```
import {fastifyRequest, fastifyReply} from "fastify"

type TBody {...}

fastiry.route({
    method: 'GET',
    ...
    handler: async (request: FastifyRequest<Body: Tbody>...)
})
```

## hook

```
fastify.addHook("onRequest" (request, reply, done) =>  {
    doen()
})

fastify.route({
    method: 'GET',
    ...
    onRequest: function (request, reply, done) {...}
})
```

-   addHook: 작성된 라우트 종류 상관 ㅇ벗이 모든 라우트에서 해당 항목 적용
-   route 속 명시하는 방식: 필요한 라우팅 시에만 적용

## Application hook

: 라우터에서 발생하는 요청/응답이 아닌, 해당 서버의 자체 훅 (onReady, onClose ...)

```
fastify.addHook("onReady", (done) => {
    const err = null
    done(err)
})

fastify.addHook("onClose", () => {
    await loadCacheFromDatabase()
})
// 서버의 시작/종료 전처리
```

## plugin

: Fastify의 기능 확장에 사용 (보통 거대해진 라우트를 주제별로 분리하는 컴포넌트 같은 거임)

```
const articleRoute = async (fastify: FastifyInstance) {
    fastify.post(...)
    fastify.get(...)
}
export default articleRoute
```

```
import pluginName from "./pluginName"
fastify.register(pluginName, [options])
```

```
import authRoute from "./auth"
import articleRoute from "./article"
const routes = async (fastify: FastifyInstance) {
    await fastify.register(authRoute, {prefix: "/auth"})
    await fastify.register(articleRoute, {prefix: "/article"})
}
fastify.register(routes)
```

### 플러그인 추가기능 사용

`npm i fastiry-plugin`
