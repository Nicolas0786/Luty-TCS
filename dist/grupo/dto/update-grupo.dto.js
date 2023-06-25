"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateGrupoDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_grupo_dto_1 = require("./create-grupo.dto");
class UpdateGrupoDto extends (0, mapped_types_1.PartialType)(create_grupo_dto_1.CreateGrupoDto) {
}
exports.UpdateGrupoDto = UpdateGrupoDto;
//# sourceMappingURL=update-grupo.dto.js.map