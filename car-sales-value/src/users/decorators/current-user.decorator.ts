import { createParamDecorator, ExecutionContext } from "@nestjs/common";

//context:ExecutionContext: Indicated incoming request
export const CurrentUser = createParamDecorator((data:never, context:ExecutionContext) => {
  const request = context.switchToHttp().getRequest();
  return request.rawHeaders;
});