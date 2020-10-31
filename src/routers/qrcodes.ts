import * as express from 'express';
const router = express.Router();
import QrCodeController from '../controllers/qrcodeController';


const qrCodeController = new QrCodeController();

router.post('/', qrCodeController.post);

export default router;
