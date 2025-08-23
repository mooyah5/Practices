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

-   사용 방법

```
import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

// 데이터 쓰기
// prisma.테이블명.create({
//     data: {
//         컬럼: 'data',
//         ...
//     }
// })
prisma.user.create({
    data: {
        email: 'hanna@asdf.com',
        name: 'hanna'
    }
})

// 여러 데이터 쓰기
prisma.user.createMany({
    data: [
        { name: 'A', email: 'a@email.com' },
        { name: 'B', email: 'b@email.com' },
        { name: 'C', email: 'b@email.com' },    // 중복 email
        { name: 'D', email: 'd@email.com' },
    ],
    skipDuplicates: true    // Skip name C
})

// 관계형 데이터 입력
prisma.user.create({
    data: {
        email: "hanna@email.com",
        name: "hanna",
        posts: {
            create: {
                title: "First Post!"
            }
        }
    }
})
// (분리) 관계형 데이터 입력
const user = {
    email: 'hanna@...',
    ...
}
const createUser = await prisma.user.create({data:user})

```

// 하나의 데이터 읽기

-   findUnique: 중복되지 않는 하나의 값
-   findFirst: 중복되더라도 제일 우선시되는 하나의 값

// 여러 데이터 읽기

-   findMany

// 옵션 (where)

```

const user = await prisma.user.findUnique({
    where: {
        email: "hanna@email.com"
    }
})

const user = await prisma.user.findUnique({
    where: {
        id: 99,
    }
})

const users = await prisma.users.findMany({
    where: {
        email: {
            endsWith: "email.com"
        }
    }
})

const users = await prisma.users.findMany({
    where: {
        OR: [
            // E로 시작하는 name이거나,
            {
                name: {
                    startsWith: "E"
                }
            },

            // profileViews가 0보다 크고 'ADMIN'인 값
            {
                AND: {
                    profileViews: {
                        gt: 0
                    },
                    role: {
                        equals: "ADMIN"
                    }
                }
            }
        ]
    }
})

const users = await prisma.user.findMany({
    // email 필터링
    where: {
        email: {
            endsWith: "email.com"
        }
    },
    // 필터링된 연관 post 테이블에서 published가 false인 값들
    posts: {
        some: {
            published: false
        },
        // 필요 목록만
        select: {
            title: true
        }
    }
    // 정렬
    orderBy: {
        id: "desc"  // 내림차순
    }
    // 필요한 목록만 가져오기
    select: {
        email: true,
        name: true
    }
})

const users = await prisma.user.findMany({
    where: {
        role: "ADMIN"
    },
    include: {
        posts: true
    }
})

// 데이터 수정
const updateUser = await prisma.user.update({
    where: {
        email: "hanna@email.com"
    },
    data: {
        name: "hanna2"
    }
})

const updateUsers = await prisma.user.updateMany({
    where: {
        email: {
            contains: "email.com"
        }
    },
    data: {
        role: "ADMIN"
    }
})

const updatePosts = await prisma.post.updateMany({
    data: {
        views: {
            increment: 1    // 1 증가
        }
        likes: {
            decrement: 1    // 1 감소
        },
    }
})
// increment: 현재 값에 +n
// decrement: 현재 값에 -n
// muliply: 현재 값에 *n
// divide: 현재 값에 나누기 n
// set: 현재 필드 값을 어떤 값으로 변경. { myField: n }과 동일.

// 데이터 삭제 (delete, deleteMany)
// 주의: 다중조건을 넣어야 할 경우 무조건 deleteMany를 써야 함.

```
