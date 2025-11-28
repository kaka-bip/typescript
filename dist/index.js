"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
let produts = [];
app.get('/produtos', (req, res) => {
    const newProduts = produts.push({
        name: "Queijo",
        preci: 20,
        description: "Sabor Otimo",
        address: {
            street: "Rua queijos",
            number: 0,
            state: "SP"
        }
    });
    produts.push(newProduts);
    return res.json('Produtos cheios');
});
app.listen(3000, () => {
    console.log('TYPERSCRIPT bom');
});
//# sourceMappingURL=index.js.map