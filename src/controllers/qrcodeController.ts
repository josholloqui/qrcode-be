import QrCodes from '../models/qrcode';
import { RequestHandler } from 'express'

class QrController {
  public post: RequestHandler = (req, res, next) => {
    const { title, url } = req.body;

    QrCodes.create({
      title, 
      url,
      qr_image: `https://qrtag.net/api/qr_5.png?url=${url}`
    })
      .then((qrcode) => res.send(qrcode))
      .catch(next)
  }
}

export default QrController;
