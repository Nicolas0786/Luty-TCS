"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var LogsModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogsModule = void 0;
const common_1 = require("@nestjs/common");
const logs_service_1 = require("./logs.service");
const logs_controller_1 = require("./logs.controller");
const typeorm_1 = require("@nestjs/typeorm");
const etiqueta_log_1 = require("./entities/etiqueta_log");
const produto_log_1 = require("./entities/produto_log");
let LogsModule = LogsModule_1 = class LogsModule {
};
LogsModule = LogsModule_1 = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([etiqueta_log_1.etiqueta_log, produto_log_1.produto_log])],
        controllers: [logs_controller_1.LogsController],
        providers: [logs_service_1.LogsService],
        exports: [LogsModule_1]
    })
], LogsModule);
exports.LogsModule = LogsModule;
//# sourceMappingURL=logs.module.js.map