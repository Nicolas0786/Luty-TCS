"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateEtiquetaDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_etiqueta_dto_1 = require("./create-etiqueta.dto");
class UpdateEtiquetaDto extends (0, mapped_types_1.PartialType)(create_etiqueta_dto_1.CreateEtiquetaDto) {
}
exports.UpdateEtiquetaDto = UpdateEtiquetaDto;
//# sourceMappingURL=update-etiqueta.dto.js.map