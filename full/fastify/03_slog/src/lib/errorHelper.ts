import { FastifyReply } from 'fastify';
import { ERROR_TYPE } from './constants';
export function handleError(rep: FastifyReply, errorType: ERROR_TYPE, error?: any) {
    rep.log.error(error); // 실제 오류 메시지를 서버측의 log로 남게
    rep.status(errorType.status).send(errorType);
    // 클라이언트에게는 오류 메시지와 상태 코드만 전달
}
