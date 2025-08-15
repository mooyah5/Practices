### 플젝 생성

`npm init -y`

### 프리즈마 설치

`npm i -D prisma`

### SQLite 사용할거임

`npx prisma init --datasource-providor sqlite`

-   schema/schema.prisma 생성됨

### prisma scheme 작성

```
model 테이블명 {
    컬럼명 타입
}
```

### .env

`DATABASE_URL="file:./prisma/dev.db"`

### Database 마이그레이션

: 설정된 스키마 바탕으로 실제 DB의 테이블 만들기
`npx prisma migrate dev --name init`

-   --name: 마이그레이션 기록을 남길 폴더명 설정

### vscode extensions: sqlite viewer

dev.db 확인

### db 수정이 필요한 경우, 마이그레이션으로 db 내용 변경

`npx prisma migrate dev --name added_job_title`

-   --name: 마찬가지로 특이점 기록

---

## Prisma로 DB 제어하기 (CRUD)

### DB를 제어하기 위해 @prisma/client 설치하기

`npm i @prisma/client`

### .env 예시

DATABASE_URL="file:./dev.db?connection_limit=1&connect_timeout=30"
FIRST_PWD = '1234'
SECRET_KEY = 'my-secret-key'
HASH_ROUND = 10
ACCESS_TOKEN_EXPIRES_IN = '60m'
REFRESH_TOKEN_EXPIRES_IN = '7 days'

### typebox란? 사용 이유 (zod랑 비슷)

-   기존에쓰던 스키마 정의

```
const articleSchema = {...}
const readArticleSchema = {
    headers: {
        authorization: { type: 'string' }
    },
    querystring: {
        type: 'object',
        properties: {
            pageNumber: { type: 'integer' },
            mode: { type: 'string' }
        }
    },
    response: {
        200: {
            type: 'object',
            required: ['totalPageCount'],
            properties: {
                totalPageCount: { type: 'integer' },
                articleList: {
                    type: 'array',
                    items: {
                        type: 'object',
                        properties: articleSchema
                    }
                }
            }
        }
    }
}

```

-   타입박스는 간단하다. (기본적으로 required 옵션임)

```
const articleSchema = {...}
const readArticleSchema = {
    headers: {
        authorization: Type.Optional(Type.String())
    },
    querystring: Type.Object({
        pageNumber: Type.Optional(Type.Integer()),
        mode: Type.Optional(Type.String())
    }),
    response: {
        200: Type.Object({
            totalPageCount: Type.Integer(),
            articleList: Type.Array(articleSchema)
        })
    }
}
```

-   타입 정의/재사용 가능

```
import { Type, Static } from "@sinclair/typebox"
const artivleSchema = Type.Object({
    id: Type.Integer(),
    content: Type.String(),
    likeCount: Type.Integer(),
    commentCount: Type.Integer(),
    userId: Type.Integer(),
    userEmail: Type.Optional(Type.String()),
    likeMe: Type.Optional(Type.Boolean())
})
type TArticle = Static<typeof articleSchema>
```
