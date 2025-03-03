import { NestInterceptor, CallHandler, ExecutionContext } from "@nestjs/common";
import { Observable } from "rxjs";
export declare class SerializeInterceptor implements NestInterceptor {
    private dtos;
    constructor(dtos: any);
    intercept(context: ExecutionContext, next: CallHandler): Observable<any>;
}
