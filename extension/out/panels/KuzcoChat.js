"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KuzcoChat = void 0;
exports.KuzcoChat = {
    _disposables: [],
    initialize(request, context, stream, token) {
        return __awaiter(this, void 0, void 0, function* () {
            if (request.command === 'ingest') {
                stream.progress('Ingesting your repo');
                this.ingestCall(request.prompt);
            }
            return { metadata: { command: 'ingest' } };
        });
    },
    ingestCall(prompt) {
        return __awaiter(this, void 0, void 0, function* () {
            return prompt;
        });
    }
};
//# sourceMappingURL=KuzcoChat.js.map