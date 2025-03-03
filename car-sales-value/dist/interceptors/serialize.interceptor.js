"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SerializeInterceptor = void 0;
const operators_1 = require("rxjs/operators");
const class_transformer_1 = require("class-transformer");
class SerializeInterceptor {
    constructor(dtos) {
        this.dtos = dtos;
    }
    intercept(context, next) {
        console.log('before the handler', context.getType());
        return next.handle().pipe((0, operators_1.map)((data) => {
            console.log('I am running before response sent', data);
            return (0, class_transformer_1.plainToClass)(this.dtos, data, {
                excludeExtraneousValues: true
            });
        }));
    }
}
exports.SerializeInterceptor = SerializeInterceptor;
//# sourceMappingURL=serialize.interceptor.js.map