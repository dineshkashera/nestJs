import { UseInterceptors, NestInterceptor, CallHandler, ExecutionContext } from "@nestjs/common";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { plainToClass } from "class-transformer";
import { PublicUserDtos } from "src/users/dtos/public-user.dtos";

export class SerializeInterceptor implements NestInterceptor{
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {

    // Run something before a request is handled
    // by the request handler
    console.log('before the handler', context.getType());

    return next.handle().pipe(
      map((data: any) => {
          // Run something before the response is sent out
          console.log('I am running before response sent', data);
          return plainToClass(PublicUserDtos, data, {
            excludeExtraneousValues: true
          });
      })
    )
  }
}