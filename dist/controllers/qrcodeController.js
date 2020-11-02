"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const qrcode_1 = __importDefault(require("../models/qrcode"));
class QrController {
    constructor() {
        this.post = (req, res, next) => {
            const { title, url } = req.body;
            qrcode_1.default.create({
                title,
                url,
                qr_image: `https://qrtag.net/api/qr_5.png?url=${url}`
            })
                .then((qrcode) => res.send(qrcode))
                .catch(next);
        };
    }
}
exports.default = QrController;
//# sourceMappingURL=qrcodeController.js.map