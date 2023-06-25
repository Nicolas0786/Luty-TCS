"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateLogDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_log_dto_1 = require("./create-log.dto");
class UpdateLogDto extends (0, mapped_types_1.PartialType)(create_log_dto_1.CreateLogDto) {
}
exports.UpdateLogDto = UpdateLogDto;
//# sourceMappingURL=update-log.dto.js.map