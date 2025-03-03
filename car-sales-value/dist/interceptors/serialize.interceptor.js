"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SerializeInterceptor = void 0;
const operators_1 = require("rxjs/operators");
const class_transformer_1 = require("class-transformer");
const public_user_dtos_1 = require("../users/dtos/public-user.dtos");
class SerializeInterceptor {
    intercept(context, next) {
        console.log('before the handler', context.getType());
        return next.handle().pipe((0, operators_1.map)((data) => {
            console.log('I am running before response sent', data);
            return (0, class_transformer_1.plainToClass)(public_user_dtos_1.PublicUserDtos, data, {
                excludeExtraneousValues: true
            });
        }));
    }
}
exports.SerializeInterceptor = SerializeInterceptor;
//# sourceMappingURL=serialize.interceptor.js.map