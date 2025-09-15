import { Type } from '@sinclair/typebox';

const authBodySchema = Type.Object({
    email: Type.String(),
    pwd: Type.String(),
});

const body = authBodySchema;

const registerSchema = {
    body,
    response: {
        201: Type.Object({
            status: Type.Number(),
            success: Type.Boolean(),
            message: Type.String(),
        }),
    },
};

const loginSchema = {
    body,
    response: {
        200: Type.Object({
            id: Type.String(),
            email: Type.String(),
            authorization: Type.String(),
        }),
    },
};

export { authBodySchema, registerSchema, loginSchema };
