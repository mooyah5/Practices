import { NestMiddleware } from '@nestjs/common';
export declare class loggerMiddleware implements NestMiddleware {
    use(req: any, res: any, next: () => void): void;
}
