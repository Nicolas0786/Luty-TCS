"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAlaDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_ala_dto_1 = require("./create-ala.dto");
class UpdateAlaDto extends (0, mapped_types_1.PartialType)(create_ala_dto_1.CreateAlaDto) {
}
exports.UpdateAlaDto = UpdateAlaDto;
//# sourceMappingURL=update-ala.dto.js.map